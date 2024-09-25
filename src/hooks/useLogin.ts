import { loginService } from "./../service/LoginService";
import { LoginClient } from "../model/LoginModel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const navigate = useNavigate();
  const { updateAuth } = useAuthContext();
  const [error, setError] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  const login = (loginClient: LoginClient) => {
    setLoader(true);
    loginService(loginClient)
      .then((response) => {
        if (response && response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("clientId", JSON.stringify(response.data.id));
          localStorage.setItem("token", JSON.stringify(response.data.token));
          localStorage.setItem("email", JSON.stringify(response.data.email));
          updateAuth(true);
          navigate("/home");
        }
      })
      .catch((error) => {
        {
          setError(error.response.data.message);
        }
      })
      .finally(() => setLoader(false));
  };
  return { error, isLoading, login };
};
