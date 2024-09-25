import { useEffect, useState } from "react";
import { Client } from "../model/ClientModel";
import { getClientMe } from "../service/ClientService";

export const useClientMe = () => {
  const [client, setClient] = useState<Client | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getClientMe()
      .then((res) => {
        setClient(res.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { client, errors, isLoading };
};
