import React from "react";
import { Footer } from "../HomePage/Components/Footer";
import { Navbar } from "../HomePage/Components/Navbar";
import { ClientTraining } from "./Components/ClientTraining";


export const ClientTrainingPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <ClientTraining />
      </div>
      <Footer />
    </div>
  );
};