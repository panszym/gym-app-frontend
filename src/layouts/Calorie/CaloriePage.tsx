import { Navbar } from "../HomePage/Components/Navbar";
import { Footer } from "../HomePage/Components/Footer";
import { Calorie } from "./Components/Calorie";




export const CaloriePage = () => {
    return(
      <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Calorie />
      </div>
      <Footer />
    </div>
    );
}