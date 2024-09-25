import { Footer } from "../HomePage/Components/Footer"
import { Navbar } from "../HomePage/Components/Navbar"
import { ClientUpdate } from "./Components/ClientUpdate";

export const ClientUpdateDetails = () => {
    

    return(
        <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <ClientUpdate />
        </div>
        <Footer />
      </div>
    );
}