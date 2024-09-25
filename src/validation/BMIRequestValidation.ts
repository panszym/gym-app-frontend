import * as yup from "yup";

export const BMIRequestValidation = yup.object().shape({
    weight: yup.number().required("Weightis required").min(1, "Weight is required").max(400, "Weight is too much. Limit 400kg"),
    height: yup.number().required("Height is required").min(100, "Min height: 100cm").max(250, "Max height: 250cm")
})