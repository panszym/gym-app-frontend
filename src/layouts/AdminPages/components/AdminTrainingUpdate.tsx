import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { StatusConstants } from "../../../utils/StatusConstant";
import { StatusChoose } from "../../Login&Registration/Ticket&StatusChoose/StatusChoose";
import { UpdateConfirm } from "../../../components/UpdateConfirm";
import { TrainingModel } from "../../../model/TrainingModel";
import {
  getTrainingByTrainingCode,
  updateTraining,
} from "../../../service/TrainingService";
import { TrainingUpdateValidation } from "../../../validation/TrainingUpdateValidation";
import { TrainingCategoryChoose } from "./TrainingCategoryChoose";
import { TrainingCategoryConstants } from "../../../utils/TrainingCategoryConstants";

export const AdminTrainingUpdate = () => {
  const navigate = useNavigate();
  const { trainingCode } = useParams<{ trainingCode: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<TrainingModel>({
    name: "",
    description: "",
    dateTime: new Date("01.01.2020T00.00"),
    maxParticipantsNumber: 0,
    participantsNumber: 0,
    status: "",
    category: "",
    trainingMemberList: [],
  });

  useEffect(() => {
    if (trainingCode) {
      setLoader(true);
      getTrainingByTrainingCode(trainingCode)
        .then((res) => {
          if (res && res.data) {
            console.log(res);
            setInitialValues(res.data);
          }
        })
        .catch((error) => setErrors(error.message))
        .finally(() => setLoader(false));
    }
  }, [trainingCode]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values: TrainingModel) => {
      console.log(values);
      updateTraining(trainingCode!, values)
        .then((response) => {
          if (response && response.status === 200) {
            navigate(`/admin/training/detail/${trainingCode}`);
          }
        })
        .catch((error) => {
          setErrors(error.response.data.message);
        });
    },
    validationSchema: TrainingUpdateValidation,
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
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control border"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger fst-italic">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="form-control border"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-danger fst-italic">
                {formik.errors.description}
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="maxParticipantsNumber" className="form-label">
              Max. participants number
            </label>
            <input
              type="number"
              id="maxParticipantsNumber"
              name="maxParticipantsNumber"
              className="form-control border"
              value={formik.values.maxParticipantsNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.maxParticipantsNumber &&
            formik.errors.maxParticipantsNumber ? (
              <div className="text-danger fst-italic">
                {formik.errors.maxParticipantsNumber}
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="dateTime" className="form-label">
              Date
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              className="form-control border"
              value={formik.values.dateTime.toString()}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.maxParticipantsNumber &&
            formik.errors.maxParticipantsNumber ? (
              <div className="text-danger fst-italic">
                {formik.errors.maxParticipantsNumber}
              </div>
            ) : null}
          </div>

          <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="mx-3">
              <p>Category:</p>
            </div>
            <div>
              <TrainingCategoryChoose
                options={TrainingCategoryConstants}
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.category}
                touched={formik.touched.category}
              />
            </div>

            <div className="d-flex justify-content-center align-items-center mt-1">
              <div className="mx-3">
                <p>Status:</p>
              </div>
              <div>
                <StatusChoose
                  options={StatusConstants}
                  id="status"
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.status}
                  touched={formik.touched.status}
                />
              </div>
            </div>
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
