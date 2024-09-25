import { Link } from "react-router-dom";
import { Client } from "../model/ClientModel";
import "./Components.css";

interface Props {
  clients: Client[];
}

export const ClientsList = ({ clients }: Props) => {
  return (
    <div className="container d-flex flex-wrap justify-content-center align-items-center">
      <div className="containet d-flex justify-content-center align-items-center mt-2 mb-2">
        <Link type="button" className="btn btn-secondary" to="/admin/clients">
          All
        </Link>
        <Link
          type="button"
          className="btn btn-secondary mx-3"
          to="/admin/clients/status/active"
        >
          Active
        </Link>
        <Link
          type="button"
          className="btn btn-secondary"
          to="/admin/clients/status/inactive"
        >
          Inactive
        </Link>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card mt-2 mb-3" id="ClientsCard">
          <h3 className="card-header">Clients</h3>
          <div className="card-body">
            {clients.map((clients) => (
              <Link
                key={clients.id}
                to={`/admin/client/detail/${clients.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="border-bottom-1 p-3 text-dark border">
                  <div className="card-title">
                    <p className="fst-italic mb-0 mt-0">
                      {clients.firstName} {clients.lastName} <br />
                      {clients.email} <br /> Status: {clients.status} <br />{" "}
                      Ticket: {clients.ticket}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
