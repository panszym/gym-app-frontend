import { Footer } from "../HomePage/Components/Footer";
import { Navbar } from "../HomePage/Components/Navbar";
import { TrainingDetails } from "./Components/TrainingDetails";

export const TrainingDetailsPage = () => {
    return(
        <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <TrainingDetails />
        </div>
        <Footer />
      </div>
      );
    
}