import { Footer } from "../HomePage/Components/Footer";
import { Navbar } from "../HomePage/Components/Navbar";
import { AdminNewTraining } from "./components/AdminNewTraining";

export const AdminNewTrainingPage = () => {

  
  return(
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <div className="flex-grow-1">
      <AdminNewTraining />
    </div>
    <Footer />
  </div>
);
}