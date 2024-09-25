import { Link, useNavigate, useParams } from "react-router-dom";
import "./Components.css";
import { useClientDetail } from "../../../hooks/useClientDetail";
import { DeleteConfirm } from "../../../components/DeleteConfirm";
import { useState } from "react";
import { deleteClient } from "../../../service/ClientService";

export const AdminClientDetails = () => {
  const navigate = useNavigate();
  const { clientId } = useParams<{ clientId: string }>();
  const { client, errors, isLoading, setLoader, setErrors } = useClientDetail();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setLoader(true);
    deleteClient(clientId!)
      .then((res) => {
        if (res) {
          navigate("/admin/clients");
        }
      })
      .catch((error) => setErrors(error.response.data.messageor))
      .finally(() => {
        setLoader(false);
        setShowDialog(false);
      });
  };

  return (
    <div>
      <div className="container mt-1 d-flex justify-content-center align-items-center">
        {isLoading && <p>Loading...</p>}
        {errors && <p className="text-danger">{errors}</p>}
      </div>
      <div className="container d-flex justify-content-center align-items-center py-2 mt-1">
        <h1>Client details</h1>
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
      <div className="container d-flex align-items-center  justify-content-center mb-2">
        <Link
          to="/admin/clients"
          type="button"
          className="btn btn-sm btn-secondary mx-2"
        >
          Back to list
        </Link>
        <Link
          to={`/admin/client/edit/${clientId}`}
          className="btn btn-sm btn-primary"
        >
          Edit details
        </Link>
        <button
          type="button"
          className="btn btn-sm btn-danger mx-2"
          onClick={() => setShowDialog(true)}
        >
          Delete account
        </button>
      </div>
      <DeleteConfirm
        message="Do you want delete this client's account?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
