import { Link } from "react-router-dom";
import { TrainingModel } from "../../../model/TrainingModel";
import DateTimeFormat from "../../../utils/DateTime";

export const DisplayTraining: React.FC<{ training: TrainingModel }> = (
  props
) => {
  return (
    <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
      <div className="row g-0">
        <div className="col-md-2 d-flex justify-content-center align-items-center">
          <div className="container d-flex justify-content-center align-items-center">
            <p>{props.training.trainingCode}<br/>Category: {props.training.category}</p>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card-body">
                <h6 className="cart-title">
                   {DateTimeFormat.formatDateString(props.training.dateTime.toString())}
                </h6>
                <h4>
                    {props.training.name}
                </h4>
                <h5 className="card-text">
                    {props.training.description}
                </h5>
            </div>
        </div>
        <div className="col-md-4 ">
            <div className="card-body d-wrap">
                <div className="container d-flex justify-content-center align-items-center">
                <Link to={`/training/detail/${props.training.trainingCode}`} type="button" className="btn btn-sm btn-primary mb-2">Details</Link>
                </div>
                <div className="contrainer d-flex justify-content-center align-items-center">
                <p>Status: </p> {props.training.status === "ACTIVE" ?
                  <p className="text-success mx-1">{props.training ? props.training.status : "N/A"}</p>
                  :
                  <p className="text-danger mx-1">{props.training ? props.training.status : "N/A"}</p>
                }
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
