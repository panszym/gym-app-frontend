import axios from "axios";

export const apiTraining = axios.create({
  baseURL: "http://localhost:8089",
});
