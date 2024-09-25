import { ClientsList } from "../../components/ClientsList";
import { useClients } from "../../hooks/useClients";
import { Footer } from "../HomePage/Components/Footer";
import { Navbar } from "../HomePage/Components/Navbar";

export const ClientsPage = () => {
  const { clients, error, isLoading } = useClients();

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
