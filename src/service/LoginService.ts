import { LoginClient } from "../model/LoginModel";
import { apiClient } from "../config/ApiClient";

export const loginService = (loginClient: LoginClient) => {
  return apiClient.post<LoginClient>("/auth/authenticate", loginClient);
};
