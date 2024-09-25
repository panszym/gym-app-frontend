import { useEffect, useState } from "react";
import { Client } from "../model/ClientModel";
import { getClientByStatus } from "../service/ClientService";

export const useClientsStatus = (status: string) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getClientByStatus(status)
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => setLoader(false));
  }, []);
  return { clients, error, isLoading };
};
