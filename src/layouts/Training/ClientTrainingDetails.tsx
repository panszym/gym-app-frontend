import { Footer } from "../HomePage/Components/Footer";
import { Navbar } from "../HomePage/Components/Navbar";
import { ClientTrainingDetails } from "./Components/ClientTrainingDetails";

export const ClientTrainingDetailsPage = () => {
    return(
        <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <ClientTrainingDetails />
        </div>
        <Footer />
      </div>
      );
    
}