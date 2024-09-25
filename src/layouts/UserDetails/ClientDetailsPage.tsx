import { Footer } from "../HomePage/Components/Footer";
import { Navbar } from "../HomePage/Components/Navbar";
import { ClientDetails } from "./Components/ClientDetails";




export const ClientDetailsPage = () => {
    

    return(
      <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <ClientDetails />
      </div>
      <Footer />
    </div>
    );
}