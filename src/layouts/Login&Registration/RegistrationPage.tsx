import "./Login&Registration.css";

import { RegisterValidation } from "../../validation/RegisterValidation";
import { RegisterClient } from "../../model/RegisterModel";
import { useFormik } from "formik";
import { TicketChoose } from "./Ticket&StatusChoose/TicketChoose";
import { TicketConstants } from "../../utils/TicketConstants";
import { useRegister } from "../../hooks/useRegister";
import { Link, useNavigate } from "react-router-dom";
import { RegistrationConfirm } from "../../components/RegistrationConfirm";

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const { error, isLoading, signup, showDialog, setShowDialog } = useRegister();

  const formik = useFormik<RegisterClient>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      status: "ACTIVE",
      ticket: "NORMAL",
    },
    validationSchema: RegisterValidation,
    onSubmit: (registerClient: RegisterClient, { resetForm }) => {
      signup(registerClient);
      resetForm();
    },
  });

  const handleConfirm = () => {
    navigate("/login");
    setShowDialog(false);
  };

  return (
    <div className="registerPage">
      <div id="errorDiv">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
      </div>
      <form className="registerForm" onSubmit={formik.handleSubmit}>
        <div className="registrationDiv">
          <div className="circle">
            <img
              className="user"
              width="48"
              height="48"
              src="https://img.icons8.com/fluency-systems-regular/ffffff/user--v1.png"
              alt="user--v1"
            />
          </div>
          <h3 className="registrationText">
            Please complete the personal data form
          </h3>
        </div>
        <div className="userData-box">
          <input
            id="firstName"
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-danger fst-italic">
            {formik.errors.firstName}
          </div>
        ) : null}

        <div className="userData-box">
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-danger fst-italic">{formik.errors.lastName}</div>
        ) : null}

        <div className="userData-box">
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger fst-italic">{formik.errors.email}</div>
        ) : null}

        <div>
          <p className="text-white d-flex justify-content-center align-items-center mt-4">
            What type of gym membership card do you want to choose? <br />
            Premium and master tickets entitle you to participate in group
            training.
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-1">
          <div>
            <TicketChoose
              options={TicketConstants}
              id="ticket"
              name="ticket"
              value={formik.values.ticket}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.ticket}
              touched={formik.touched.ticket}
            />
          </div>
        </div>

        <div className="password-box">
          <img
            className="padlock-password"
            src="https://img.icons8.com/ios/ffffff/unlock.png"
            alt="unlock"
          />
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-danger fst-italic">{formik.errors.password}</div>
        ) : null}

        <div className="password-box">
          <img
            className="padlock-password"
            src="https://img.icons8.com/ios/ffffff/unlock.png"
            alt="unlock"
          />
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-danger fst-italic">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
        <div className="container d-flex flex-wrap align-items-center py-4">
          <div className="container d-flex align-items-center justify-content-center mt-2">
            <button
              type="submit"
              className="btn btn-sm btn-secondary btn-outline-light mt-4"
            >
              Register
            </button>

            <button
              className="btn btn-sm app-primary-bg-color btn-outline-light mt-4 mx-5"
              type="reset"
              onClick={formik.handleReset}
            >
              Reset
            </button>
          </div>
          <div className="container d-flex align-items-center justify-content-center mt-1 ">
            <Link className="text-white mt-4" to="/login">
              Click here to back to login form!
            </Link>
          </div>
        </div>
      </form>
      <RegistrationConfirm
        message="Please, log in to your account."
        show={showDialog}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
