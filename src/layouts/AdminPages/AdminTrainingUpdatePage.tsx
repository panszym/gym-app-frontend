import { Footer } from "../HomePage/Components/Footer";
import { Navbar } from "../HomePage/Components/Navbar";
import { AdminTrainingUpdate } from "./components/AdminTrainingUpdate";

export const AdminTrainingUpdatePage = () => {

  
  return(
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <div className="flex-grow-1">
      <AdminTrainingUpdate />
    </div>
    <Footer />
  </div>
);
}