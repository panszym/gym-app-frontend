
import { TrainingModel } from './../model/TrainingModel';
import { apiTraining } from './../config/ApiTraining';


export const getTrainingByTrainingCode = (trainingCode: string) => {
    return apiTraining.get<TrainingModel>(`training/${trainingCode}`);
}

export const deleteTrainingByTrainingCode = (trainingCode: string) => {
    return apiTraining.delete<TrainingModel>(`training/${trainingCode}`);
}

export const updateTraining = ( trainingCode: string, training: TrainingModel) => {
    return apiTraining.patch<TrainingModel>(`training/${trainingCode}`, training);
} 

export const addTraining = ( training: TrainingModel) => {
    return apiTraining.post<TrainingModel>(`training`, training);
} 

export const trainingSignup = (trainingCode: string, clientId: string) => {
    return apiTraining.post(`training/${trainingCode}/clients/${clientId}`)
}

export const removeParticipantFromTRaining = (trainingCode: string, clientId: string) => {
    return apiTraining.post(`training/remove/${trainingCode}/clients/${clientId}`)
}

export const getClientTraining = (email: string) => {
    return apiTraining.get<TrainingModel[]>(`training/client`, {params:{email: email}});
}