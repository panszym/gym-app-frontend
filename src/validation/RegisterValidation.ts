import * as yup from "yup";

export const RegisterValidation = yup.object().shape({
    firstName: yup.string().required("First name is required").min(1, "First name must not be empty"),
    lastName: yup.string().required("Last name is required").min(1, "Last name must not be empty"),
    email: yup.string().required("Email is required").email("Email is not valid"),
    password: yup.string().required("Password is required").min(5, "Password must contain at least 5 characters"),
    confirmPassword: yup.string().required("Password is required").oneOf([yup.ref("password")], "Password must match"),


})