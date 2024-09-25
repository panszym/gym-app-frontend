import { useFormik } from "formik";
import { BMIRequest } from "../../../model/BMIRequest";
import { BMIRequestValidation } from "../../../validation/BMIRequestValidation";
import { BMICalculate } from "../../../service/ClientService";
import { useState } from "react";
import { BMIResponse } from "../../../model/BMIResponse";

export const BMI = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [BMIResponse, setBMIResponse] = useState<BMIResponse | any>();

  const formik = useFormik<BMIRequest>({
    initialValues: {
      weight: 0,
      height: 0,
    },
    validationSchema: BMIRequestValidation,
    onSubmit: (bmiRequest: BMIRequest, { resetForm }) => {
      BMICalculate(bmiRequest)
        .then((response) => {
          if (response.status === 200) {
            setBMIResponse(response);
            setShowDialog(true);
          }
        })
        .catch((error) => setError(error.response.data.message))
        .finally(() => setLoader(false));
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <div className="container col-md-5 col-sm-8 col-xs-12 ">
        <div className="container mt-1 d-flex justify-content-center align-items-center">
          {isLoading && <p>Loading...</p>}
          {error && <p className="text-danger">{error}</p>}
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3 mt-5">
            <div className="container d-flex align-items-center justify-content-center mb-2">
              <h3>Please enter your data.</h3>
            </div>
            <label htmlFor="weight" className="form-label">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              className="form-control border"
              value={formik.values.weight}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.weight && formik.errors.weight ? (
              <div className="text-danger fst-italic">
                {formik.errors.weight}
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="height" className="form-label">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              className="form-control border"
              value={formik.values.height}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.height && formik.errors.height ? (
              <div className="text-danger fst-italic">
                {formik.errors.height}
              </div>
            ) : null}
          </div>

          {showDialog ? (
            <div className="container d-flex align-items-center justify-content-center mb-2">
              {BMIResponse.data.result < 18.5 ? (
                <p className="text-warning">
                  Your Body Mass Index is {BMIResponse.data.result}. This is
                  considered {BMIResponse.data.message}.
                </p>
              ) : null}
              {BMIResponse.data.result >= 18.5 &&
              BMIResponse.data.result <= 25 ? (
                <p className="text-success">
                  Your Body Mass Index is {BMIResponse.data.result}. This is
                  considered {BMIResponse.data.message}.
                </p>
              ) : null}
              {BMIResponse.data.result > 25 ? (
                <p className="text-danger">
                  Your Body Mass Index is {BMIResponse.data.result}. This is
                  considered {BMIResponse.data.message}.
                </p>
              ) : null}
            </div>
          ) : null}
          <div className="container d-flex align-items-center justify-content-center mb-2">
            <button
              onClick={() => setShowDialog(false)}
              type="submit"
              className="btn btn-sm btn-primary"
            >
              Calculate BMI
            </button>
          </div>
        </form>
        <div className="container d-wrap align-items-center justify-content-center mt-4 mb-4">
          <ul>
            <li>
              <p className="text-success">
                The green color of the result means that the weight is normal.
              </p>
            </li>
            <li>
              <p className="text-warning">
                The yellow color of the result means that the weight is too low.
              </p>
            </li>
            <li>
              <p className="text-danger">
                The red color of the result means that the weight is too high.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
