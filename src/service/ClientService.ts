import { BMIRequest } from './../model/BMIRequest';
import { Client } from './../model/ClientModel';
import { apiClient } from '../config/ApiClient';
import { BMIResponse } from '../model/BMIResponse';
import { CalorieRequest } from '../model/CalorieRequest';




export const getClients = () => {
    return apiClient.get<Client[]>(`clients`);
}

export const getClientMe = () => {
    return apiClient.get<Client>(`clients/me`);
}

export const getClientById = ( clientId: string ) => {
    return apiClient.get<Client>(`clients/${clientId}`);
}

export const getClientByIdAdmin = ( clientId: string ) => {
    return apiClient.get<Client>(`clients/admin/${clientId}`);
}

export const getClientByStatus = ( status: string ) => {
    return apiClient.get<Client[]>(`clients/status`, {params:{status: status}});
}

export const updateClient = ( clientId: string, client: Client) => {
    return apiClient.patch<Client>(`clients/${clientId}`, client);
} 

export const toggleStatus = ( clientId: string) => {
    return apiClient.patch(`clients/status/${clientId}`);
}

export const deleteClient = ( clientId: string) => {
    return apiClient.delete(`clients/${clientId}`);
}

export const BMICalculate =(bmiRequest: BMIRequest) => {
    return apiClient.post<BMIResponse>("/clients/bmi", bmiRequest)
}

export const CalorieCalculate =(calorieRequest: CalorieRequest) => {
    return apiClient.post<number>("/clients/calories", calorieRequest)
}