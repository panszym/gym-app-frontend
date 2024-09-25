import * as yup from "yup";

export const NewTrainingValidation = yup.object().shape({
    trainingCode: yup.string().required("Training code is required").min(1, "Training code must not be empty"),
    name: yup.string().required("Name is required").min(1, "Name must not be empty"),
    description: yup.string().required("Description is required"),
    maxParticipantsNumber: yup.number().required("Max participants number is required").min(1, "Training must have more than 0 places"),
    dateTime: yup.date().required("Date is required"),
    status: yup.string().required("Status is required"),
    category: yup.string().required("Category is required")
    
})