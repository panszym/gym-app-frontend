import React from "react";
import { Footer } from "../HomePage/Components/Footer";
import { Navbar } from "../HomePage/Components/Navbar";
import { Pricing } from "./Components/Pricing";

export const PricingPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};
