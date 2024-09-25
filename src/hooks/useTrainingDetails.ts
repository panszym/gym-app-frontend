import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TrainingModel } from "../model/TrainingModel";
import { getTrainingByTrainingCode } from "../service/TrainingService";

export const useTrainingDetails = () => {
  const { trainingCode } = useParams<{ trainingCode: string }>();
  const [training, setTraining] = useState<TrainingModel | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getTrainingByTrainingCode(trainingCode!)
      .then((res) => {
        setTraining(res.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { training, errors, isLoading, setLoader, setErrors };
};
