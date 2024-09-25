import { useEffect, useState } from "react";
import { getClientById } from "../service/ClientService";
import { Client } from "../model/ClientModel";
import { useParams } from "react-router-dom";

export const useClientDetail = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const [client, setClient] = useState<Client | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getClientById(clientId!)
      .then((res) => {
        setClient(res.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { client, errors, isLoading, setLoader, setErrors };
};
