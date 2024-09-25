import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./layouts/HomePage/HomePage";
import { LoginPage } from "./layouts/Login&Registration/LoginPage";
import { RegistrationPage } from "./layouts/Login&Registration/RegistrationPage";
import { PricingPage } from "./layouts/Pricing/PricingPage";
import { useAuthContext } from "./hooks/useAuthContext";
import { ClientDetailsPage } from "./layouts/UserDetails/ClientDetailsPage";
import { ClientUpdateDetails } from "./layouts/UserDetails/ClientUpdateDetails";
import { ClientsPage } from "./layouts/AdminPages/ClientsPage";
import { AdminClientUpdatePage } from "./layouts/AdminPages/AdminClientsUpdatePage";
import { AdminClientDetailPage } from "./layouts/AdminPages/AdminClientDetailPage";
import { ClientsPageStatusActive } from "./layouts/AdminPages/ClientsPageStatusActive";
import { ClientsPageStatusInactive } from "./layouts/AdminPages/ClientPageStatusInactive";
import { TrainingPage } from "./layouts/Training/TrainingPage";
import { TrainingDetailsPage } from "./layouts/Training/TrainingDetailsPage";
import { AdminTraningPage } from "./layouts/AdminPages/TrainingPage";
import { AdminTrainingDetailsPage } from "./layouts/AdminPages/TrainingDetailsPage";
import { AdminTrainingUpdatePage } from "./layouts/AdminPages/AdminTrainingUpdatePage";
import { AdminNewTrainingPage } from "./layouts/AdminPages/AdminNewTrainingPage";
import { ClientTrainingPage } from "./layouts/Training/ClientTrainingPage";
import { ClientTrainingDetailsPage } from "./layouts/Training/ClientTrainingDetails";
import { BMIPage } from "./layouts/BMI/BMIPage";
import { CaloriePage } from "./layouts/Calorie/CaloriePage";

export const App = () => {
  const { isAuthenticated, isAdmin } = useAuthContext();

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <Routes>
          <Route
            path="/login"
            element={!isAuthenticated ? <LoginPage /> : <Navigate to="/home" />}
          />
          <Route
            path="/registration"
            element={
              !isAuthenticated ? <RegistrationPage /> : <Navigate to="/home" />
            }
          />
          <Route
            path="/"
            element={!isAuthenticated ? <LoginPage /> : <Navigate to="/home" />}
          />
          <Route
            path="/home"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/pricing"
            element={
              isAuthenticated ? <PricingPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/client/data"
            element={
              isAuthenticated ? <ClientDetailsPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/client/edit"
            element={
              isAuthenticated ? <ClientUpdateDetails /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/client/bmi"
            element={
              isAuthenticated ? <BMIPage /> : <Navigate to="/login" />
              }
          />
          <Route
            path="/client/calorie"
            element={
              isAuthenticated ? <CaloriePage /> : <Navigate to="/login" />
              }
          />
          <Route
            path="/training/detail/:trainingCode"
            element={
                <TrainingDetailsPage /> 
              }
          />
          <Route
            path="/training/client/detail/:trainingCode"
            element={
                <ClientTrainingDetailsPage /> 
              }
          />
          <Route
            path="/admin/clients"
            element={
              isAuthenticated && isAdmin ? 
                <ClientsPage /> : <Navigate to="/home" />
            }
          />
          <Route
            path="/admin/clients/status/active"
            element={
              isAuthenticated && isAdmin ? 
                <ClientsPageStatusActive /> : <Navigate to="/home" />
            }
          />
          <Route
            path="/admin/clients/status/inactive"
            element={
              isAuthenticated && isAdmin ? 
                <ClientsPageStatusInactive /> : <Navigate to="/home" />
            }
          />
          <Route
            path="/admin/client/detail/:clientId"
            element={
              isAuthenticated && isAdmin ? 
                <AdminClientDetailPage /> : <Navigate to="/home" />
            }
          />
          <Route
            path="/admin/client/edit/:clientId"
            element={
              isAuthenticated && isAdmin ? 
                <AdminClientUpdatePage /> : <Navigate to="/home" />
            }
          />
          <Route
            path="/training"
            element={
              isAuthenticated ? <TrainingPage /> : <Navigate to="/home" />
            }
          />
          <Route
            path="/training/client"
            element={
              isAuthenticated ? <ClientTrainingPage /> : <Navigate to="/home" />
            }
          />
          <Route
            path="/admin/training"
            element={
              isAuthenticated && isAdmin ? 
                <AdminTraningPage /> : <Navigate to="/home" />
            }
          />
          <Route
            path="/admin/training/detail/:trainingCode"
            element={
              isAuthenticated && isAdmin ? 
                <AdminTrainingDetailsPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/admin/training/edit/:trainingCode"
            element={
              isAuthenticated && isAdmin ? 
                <AdminTrainingUpdatePage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/admin/training/new"
            element={
              isAuthenticated && isAdmin ? 
                <AdminNewTrainingPage /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </div>
  );
};
