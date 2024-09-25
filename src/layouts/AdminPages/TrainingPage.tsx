import { Footer } from "../HomePage/Components/Footer";
import { Navbar } from "../HomePage/Components/Navbar";
import { Training } from "./components/AdminTraining";


export const AdminTraningPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Training />
      </div>
      <Footer />
    </div>
  );
};