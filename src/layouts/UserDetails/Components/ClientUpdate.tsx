import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client } from "../../../model/ClientModel";
import { getClientMe, updateClient } from "../../../service/ClientService";
import { useFormik } from "formik";
import { ClientUpdateValidation } from "../../../validation/ClientUpdateValidation";
import { UpdateConfirm } from "../../../components/UpdateConfirm";

export const ClientUpdate = () => {
  const navigate = useNavigate();
  const clientId = localStorage.getItem("clientId");
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Client>({
    firstName: "",
    lastName: "",
    email: "",
    status: "",
    ticket: "",
  });

  useEffect(() => {
    if (clientId) {
      setLoader(true);
      getClientMe()
        .then((res) => {
          if (res && res.data) {
            setInitialValues(res.data);
          }
        })
        .catch((error) => setErrors(error.response.data.message))
        .finally(() => setLoader(false));
    }
  }, [clientId]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values: Client) => {
      if (clientId !== null)
        updateClient(clientId, values)
          .then((response) => {
            if (response && response.status === 200) {
              navigate("/client/data");
            }
          })
          .catch((error) => {
            setErrors(error.response.data.message);
          });
    },
    validationSchema: ClientUpdateValidation,
  });

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    formik.handleSubmit();
    setShowDialog(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <div className="container col-md-4 col-sm-8 col-xs-12 ">
        <div className="container mt-1 d-flex justify-content-center align-items-center">
          {isLoading && <p>Loading...</p>}
          {error && <p className="text-danger">{error}</p>}
        </div>
        <form onSubmit={() => setShowDialog(true)}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control border"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-danger fst-italic">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control border"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-danger fst-italic">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>
          <div className="container d-flex align-items-center  justify-content-center text-danger">
            <p className="infoParagraph">
              You cannot change your email address. <br />
              If you want to change the ticket type, please contact the gym
              reception.
            </p>
            <p></p>
          </div>
          <div className="container d-flex align-items-center  justify-content-center">
            <button
              className="btn btn-sm btn-primary mb-2"
              type="button"
              onClick={() => setShowDialog(true)}
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <UpdateConfirm
        message="Do you save the changes?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
