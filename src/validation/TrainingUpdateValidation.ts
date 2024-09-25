import * as yup from "yup";

export const TrainingUpdateValidation = yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
    maxParticipantsNumber: yup.number().required("Max participants number is required"),
    status: yup.string().required("Status is required"),
    category: yup.string().required("Category is required")
    
})