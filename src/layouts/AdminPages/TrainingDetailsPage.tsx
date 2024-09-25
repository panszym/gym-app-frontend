import { Footer } from "../HomePage/Components/Footer";
import { Navbar } from "../HomePage/Components/Navbar";
import { TrainingDetails } from "./components/AdminTrainingDetails";

export const AdminTrainingDetailsPage = () => {
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