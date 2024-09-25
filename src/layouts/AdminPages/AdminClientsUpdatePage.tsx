import { Footer } from "../HomePage/Components/Footer";
import { Navbar } from "../HomePage/Components/Navbar";
import { AdminClientUpdate } from "./components/AdminClientUpdate";

export const AdminClientUpdatePage = () => {

  
  return(
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <div className="flex-grow-1">
      <AdminClientUpdate />
    </div>
    <Footer />
  </div>
);
}