import axios from "axios";
import { LoginResponse } from "../model/LoginResponse";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

apiClient.interceptors.request.use(
  (config) => {
    if (
      !config.url?.includes("/authenticate") &&
      !config.url?.includes("/registration")
    ) {
      const authObject = localStorage.getItem("user");
      if (authObject) {
        const { token } = JSON.parse(authObject) as LoginResponse;
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);
