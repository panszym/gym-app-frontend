import "./Login&Registration.css";
import { useFormik } from "formik";
import { LoginClient } from "../../model/LoginModel";
import { LoginValidation } from "../../validation/LoginValidation";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const { error, isLoading, login } = useLogin();

  const formik = useFormik<LoginClient>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: (loginClient: LoginClient, { resetForm }) => {
      login(loginClient);
      resetForm();
    },
  });
  

  return (
    <div className="loginPage">
      <div id="errorDiv">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
      </div>
      <form className="loginForm" onSubmit={formik.handleSubmit}>
        <div className="signInDiv">
          <div className="circle">
            <img
              className="user"
              width="48"
              height="48"
              src="https://img.icons8.com/fluency-systems-regular/ffffff/user--v1.png"
              alt="user--v1"
            />
          </div>
          <h3 className="loginText">Sign in</h3>
        </div>

        <div className="email-box">
          <img
            className="user-email"
            src="https://img.icons8.com/fluency-systems-regular/ffffff/user--v1.png"
            alt="user--v1"
          />
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger fst-italic">{formik.errors.email}</div>
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

        <div className="container d-flex flex-wrap align-items-center py-4">
          <div className="container d-flex align-items-center justify-content-center mt-2">
            <button
              type="submit"
              className="btn btn-sm btn-secondary btn-outline-light"
            >
              Login
            </button>
            <button
              className="btn btn-sm app-primary-bg-color btn-outline-light mx-2"
              type="reset"
              onClick={formik.handleReset}
            >
              Reset
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-1">
            <Link className="text-white mt-4" to="/registration">
              If you don't have an account click here!
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
