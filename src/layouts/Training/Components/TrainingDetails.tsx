import { Link, useNavigate } from "react-router-dom";
import "./Components.css";
import { useEffect, useState } from "react";
import { useTrainingDetails } from "../../../hooks/useTrainingDetails";
import DateTimeFormat from "../../../utils/DateTime";
import { removeParticipantFromTRaining, trainingSignup } from "../../../service/TrainingService";


export const TrainingDetails = () => {

  const { training, errors, isLoading, setLoader, setErrors } = useTrainingDetails();
  const navigate = useNavigate();

  const clientId = localStorage.getItem("clientId");
  const clientEmail = localStorage.getItem("email")?.substring(1, (localStorage.getItem("email")?.length! - 1));
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [notSignUp, setNotSignUp] = useState<boolean>(false);
  
 

  useEffect(() => {
      training?.trainingMemberList.map((participant) => {(
      participant.email === clientEmail ? setIsSignUp(true) : setNotSignUp(true)
      )})
  },);

  function refresh() {
    window.location.reload();
  } 
  
  const signUp = () => {
    setLoader(true);
  if(clientId !== null) 
    trainingSignup(training?.trainingCode!, clientId)
    .then((res) => {
      refresh();
    })
    .catch((error) => {
      setErrors(error.response.data.message);
    })
    .finally(() => {
      setLoader(false)
      });
  };

  const cancelEnroll = () => {
    setLoader(true);
  if(clientId !== null) 
    removeParticipantFromTRaining(training?.trainingCode!, clientId)
    .then((res) => {
      refresh();
    })
    .catch((error) => {
      setErrors(error.response.data.message);
    })
    .finally(() => {
      setLoader(false)
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
                  <td>{training ? DateTimeFormat.formatDateString(training.dateTime.toString()) : "N/A"}</td>
                </tr>
                <tr>
                <th>Status:</th>
                  {training?.status === "ACTIVE" ?
                  <td className="text-success">{training ? training.status : "N/A"}</td>
                  :
                  <td className="text-danger">{training ? training.status : "N/A"}</td>
                }
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
                  <th>Sign up:</th>
                  <td>{isSignUp ? <p className="text-success">You are enrolled on this training</p> : <p className="text-warning">You are not enrolled on this training</p>}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center  justify-content-center mb-2">
        <Link
          to="/training"
          type="button"
          className="btn btn-sm btn-secondary mx-2"
        >
          Back to list
        </Link>{
          !isSignUp
          ?
          <button onClick={() => signUp()} type="button" className="btn btn-sm btn-success">Enroll</button>
          :
          <button onClick={() => cancelEnroll()} type="button" className="btn btn-sm btn-danger">Cancel the enroll</button>
        }
        </div>
    </div>
  );
};