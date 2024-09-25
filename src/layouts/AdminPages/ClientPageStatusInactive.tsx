import { ClientsList } from "../../components/ClientsList";
import { useClientsStatus } from "../../hooks/useClientsStatus";
import { Footer } from "../HomePage/Components/Footer";
import { Navbar } from "../HomePage/Components/Navbar";

export const ClientsPageStatusInactive = () => {
  const { clients, error, isLoading } = useClientsStatus("INACTIVE");

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <div className="container">
          {isLoading && <p>Loading...</p>}
          {error && <p className="text-danger">{error}</p>}
          <ClientsList clients={clients} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
