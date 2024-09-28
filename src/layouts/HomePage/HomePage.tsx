import { ExploreGym } from "./Components/ExploreGym";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Offer } from "./Components/Offer";


export const HomePage = () => {
    return(
      <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <ExploreGym />
        <Offer />
      </div>
      <Footer />
    </div>
    );
}