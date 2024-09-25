import { useFormik } from "formik";
import { CalorieCalculate } from "../../../service/ClientService";
import { useState } from "react";
import { CalorieResponse } from "../../../model/CalorieResponse";
import { CalorieRequest } from "../../../model/CalorieRequest";
import { CalorieRequestValidation } from "../../../validation/CalorieRequestValidator";
import { GenderChoose } from "./GenderChoose";
import { ActivityConstant } from "../../../utils/ActivityConstant";
import { GenderConstant } from "../../../utils/GenderConstant";
import { ActivityChoose } from "./ActivityChoose";

export const Calorie = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [calorieResponse, setCalorieResponse] = useState<
    CalorieResponse | any
  >();

  const formik = useFormik<CalorieRequest>({
    initialValues: {
      weight: 0,
      height: 0,
      age: 0,
      gender: "",
      activity: "",
    },
    validationSchema: CalorieRequestValidation,
    onSubmit: (calorieRequest: CalorieRequest, { resetForm }) => {
      CalorieCalculate(calorieRequest)
        .then((response) => {
          if (response.status === 200) {
            setCalorieResponse(response);
            setShowDialog(true);
          }
        })
        .catch((error) => setError(error.response.data.message))
        .finally(() => setLoader(false));
    },
  });

  return (
    <div className="d-wrap justify-content-center align-items-center mt-2">
      <div className="container col-md-3 col-sm-8 col-xs-12 ">
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

          <div className="mb-3">
            <label htmlFor="height" className="form-label">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control border"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.age && formik.errors.age ? (
              <div className="text-danger fst-italic">{formik.errors.age}</div>
            ) : null}
          </div>

          <div>
            <GenderChoose
              options={GenderConstant}
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.gender}
              touched={formik.touched.gender}
            />
          </div>

          <div>
            <ActivityChoose
              options={ActivityConstant}
              id="activity"
              name="activity"
              value={formik.values.activity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.activity}
              touched={formik.touched.activity}
            />
          </div>
          <div className="container d-flex align-items-center justify-content-center mb-2 mt-2">
            <button
              onClick={() => setShowDialog(false)}
              type="submit"
              className="btn btn-sm btn-primary"
            >
              Calculate number of your daily calories.
            </button>
          </div>
        </form>
      </div>
      {showDialog ? (
        <div className="container d-flex align-items-center justify-content-center mb-2 mt-4">
          <p className="text-success">
            Your estimate number of daily calorie: {calorieResponse.data}kcal.
          </p>
        </div>
      ) : null}
    </div>
  );
};
