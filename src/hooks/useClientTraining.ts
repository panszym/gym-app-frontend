import { useEffect, useState } from "react";
import { TrainingModel } from "../model/TrainingModel";
import { getClientTraining } from "../service/TrainingService";

export const useClientTraining = () => {
  const [training, setTraining] = useState<TrainingModel[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const email = localStorage.getItem("email");

  useEffect(() => {
    setLoader(true);
    getClientTraining(email!)
      .then((response) => {
        setTraining(response.data);
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => setLoader(false));
  }, []);
  return { training, error, isLoading };
};
