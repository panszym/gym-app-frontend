import { useState } from "react";
import { RegisterClient } from "../model/RegisterModel";
import { registerService } from "../service/RegisterService";

export const useRegister = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleConfirm = () => {
    setShowDialog(false);
  };

  const signup = (registerClient: RegisterClient) => {
    setLoader(true);
    registerService(registerClient)
      .then((res) => {
        if (res && res.status === 200) {
          setShowDialog(true);
        }
      })
      .catch((error) => {
        {
          setError(error.response.data.message);
        }
      })
      .finally(() => setLoader(false));
  };
  return { error, isLoading, signup, showDialog, setShowDialog };
};
