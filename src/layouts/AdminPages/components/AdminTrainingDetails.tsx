import { Link, useNavigate, useParams } from "react-router-dom";
import "./Components.css";
import { useState } from "react";
import { useTrainingDetails } from "../../../hooks/useTrainingDetails";
import { DeleteConfirm } from "../../../components/DeleteConfirm";
import { deleteTrainingByTrainingCode } from "../../../service/TrainingService";
import DateTimeFormat from "../../../utils/DateTime";

export const TrainingDetails = () => {
  const navigate = useNavigate();
  const { trainingCode } = useParams<{ trainingCode: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const { training, errors, isLoading, setLoader, setErrors } =
    useTrainingDetails();

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setLoader(true);
    deleteTrainingByTrainingCode(trainingCode!)
      .then((res) => {
        if (res) {
          navigate("/admin/training");
        }
      })
      .catch((error) => setErrors(error.response.data.message))
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
        <h1>Training details</h1>
      </div>

      <div
        id="trainingDetails-table"
        className="d-flex justify-content-center align-items-center py-1"
      >
        <div className="card">
          <div className="card-body py-2">
            <table className="table table-responsive">
              <tbody>
                <tr>
                  <th>Training code:</th>
                  <td>{training ? training.trainingCode : "N/A"}</td>
                </tr>
                <tr>
                  <th>Name:</th>
                  <td>{training ? training.name : "N/A"}</td>
                </tr>
                <tr>
                  <th>Description:</th>
                  <td>{training ? training.description : "N/A"}</td>
                </tr>
                <tr>
                  <th>Date:</th>
                  <td>
                    {training
                      ? DateTimeFormat.formatDateString(
                          training.dateTime.toString()
                        )
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <th>Status:</th>
                  {training?.status === "ACTIVE" ? (
                    <td className="text-success">
                      {training ? training.status : "N/A"}
                    </td>
                  ) : (
                    <td className="text-danger">
                      {training ? training.status : "N/A"}
                    </td>
                  )}
                </tr>
                <tr>
                  <th>Max. number of participants:</th>
                  <td>{training ? training.maxParticipantsNumber : "N/A"}</td>
                </tr>
                <tr>
                  <th>Participants:</th>
                  <td>{training ? training.participantsNumber : "N/A"}</td>
                </tr>
                <tr>
                  <th>Category:</th>
                  <td>{training ? training.category : "N/A"}</td>
                </tr>
                <tr>
                  <th>List of participants:</th>
                  <td>
                    {training && training.trainingMemberList
                      ? training.trainingMemberList.map((participant) => (
                          <div className="card-title border-bottom">
                            <p className="fst-italic mb-0 mt-0">
                              First Name: {participant.firstname}; <br /> Email:{" "}
                              {participant.email} <br />
                            </p>
                          </div>
                        ))
                      : "N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center  justify-content-center mb-2">
        <Link
          to="/admin/training"
          type="button"
          className="btn btn-sm btn-secondary mx-2"
        >
          Back to list
        </Link>
        <Link
          to={`/admin/training/edit/${training?.trainingCode}`}
          className="btn btn-sm btn-primary"
        >
          Edit details
        </Link>
        <button
          type="button"
          className="btn btn-sm btn-danger mx-2"
          onClick={() => setShowDialog(true)}
        >
          Delete training
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
