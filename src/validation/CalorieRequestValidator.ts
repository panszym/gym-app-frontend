import * as yup from "yup";

export const CalorieRequestValidation = yup.object().shape({
    weight: yup.number().required("Weightis required").min(1, "Weight is required").max(400, "Weight is too much. Limit 400kg"),
    height: yup.number().required("Height is required").min(100, "Min height: 100cm").max(250, "Max height: 250cm"),
    age: yup.number().required("Age is required").min(1, "Age is required").max(110, "Max age: 110"),
    gender: yup.string().required("Gender is required"),
    activity: yup.string().required("Activity is required"),
})