import { apiClient } from "../config/ApiClient";
import { RegisterClient } from "../model/RegisterModel";

export const registerService = (registerClient: RegisterClient) => {
  return apiClient.post<RegisterClient>("/auth/registration", registerClient);
};
