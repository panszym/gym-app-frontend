import { NavLink, useNavigate } from "react-router-dom";
import "./Components.css";
import { FaBars } from "react-icons/fa";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { Client } from "../../../model/ClientModel";
import { getClientById } from "../../../service/ClientService";

export const Navbar = () => {
  const { isAuthenticated, updateAuth, isAdmin, updateAdmin } =
    useAuthContext();
  const navigate = useNavigate();
  const clientId = localStorage.getItem("clientId");

  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Client>({
    firstName: "",
    lastName: "",
    email: "",
    status: "",
    ticket: "",
    role: "",
  });

  useEffect(() => {
    if (clientId) {
      setLoader(true);
      if (clientId !== null)
        getClientById(clientId)
          .then((res) => {
            if (res && res.data) {
              setInitialValues(res.data);
              if (res.data.role === "ADMIN") {
                updateAdmin(true);
              }
            }
          })
          .catch((error) => setErrors(error.message))
          .finally(() => setLoader(false));
    }
  }, [clientId]);

  const handleLogout = () => {
    localStorage.clear();
    updateAuth(false);
    navigate("/login");
    updateAdmin(false);
  };

  return (
    <nav className="navbar navbar-expand-lg py-4" id="navbar">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/training">
              Search training
            </NavLink>
            <NavLink className="nav-link" to="/client/bmi">
              BMI calculator
            </NavLink>
            <NavLink className="nav-link" to="/client/calorie">
              Calorie calculator
            </NavLink>
            <NavLink className="nav-link" to="/pricing">
              Pricing
            </NavLink>
            <NavLink className="nav-link" to="/client/data">
              Client details
            </NavLink>
            
            <NavLink className="nav-link px-2 text-white" to="/training/client">
              Client's training
            </NavLink>
          
            {isAdmin ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="adminDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink className="dropdown-item" to="/admin/clients">
                    Clients
                  </NavLink>
                  <NavLink className="dropdown-item" to="/admin/training">
                     Training
                  </NavLink>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="d-flex" role="search">
          {!isAuthenticated ? (
            <>
              <NavLink className="btn btn-sm btn-outline-light" to="/login">
                Login
              </NavLink>
            </>
          ) : (
            <>
              <button
                className="btn btn-sm app-primary-bg-color btn-outline-light mx-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars color="white" />
          </button>
        </div>
      </div>
    </nav>
  );
};
