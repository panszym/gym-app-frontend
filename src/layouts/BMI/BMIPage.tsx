import { Navbar } from "../HomePage/Components/Navbar";
import { Footer } from "../HomePage/Components/Footer";
import { BMI } from "./Components/BMI";



export const BMIPage = () => {
    return(
      <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <BMI />
      </div>
      <Footer />
    </div>
    );
}