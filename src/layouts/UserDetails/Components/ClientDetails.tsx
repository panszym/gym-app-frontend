import { Link } from "react-router-dom";
import { useClientMe } from "../../../hooks/useClientMe";
import "./Components.css";

export const ClientDetails = () => {
  const { client, errors, isLoading } = useClientMe();
  return (
    <div>
      <div className="container mt-1 d-flex justify-content-center align-items-center">
        {isLoading && <p>Loading...</p>}
        {errors && <p className="text-danger">{errors}</p>}
      </div>
      <div className="container d-flex justify-content-center align-items-center py-2 mt-1">
        <h1>Your details</h1>
      </div>

      <div
        id="userDetails-table"
        className="d-flex justify-content-center align-items-center py-1"
      >
        <div className="card">
          <div className="card-body py-2">
            <table className="table table-responsive">
              <tbody>
                <tr>
                  <th>First Name:</th>
                  <td>{client ? client.firstName : "N/A"}</td>
                </tr>
                <tr>
                  <th>Last Name:</th>
                  <td>{client ? client.lastName : "N/A"}</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>{client ? client.email : "N/A"}</td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td>{client ? client.status : "N/A"}</td>
                </tr>
                <tr>
                  <th>Ticket:</th>
                  <td>{client ? client.ticket : "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center  justify-content-center">
        <Link to="/client/edit" className="btn btn-sm btn-primary">Edit your data</Link>
      </div>
    </div>
  );
};
