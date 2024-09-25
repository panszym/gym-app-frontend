import { useClientTraining } from "../../../hooks/useClientTraining";
import { DisplayClientTraining } from "./DisplayClientTraining";

export const ClientTraining = () => {
  const { training, error, isLoading } = useClientTraining();
  let isEmpty: boolean = true;
  
  if(training.length > 0)isEmpty = false;
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!isEmpty ? (
        training.map((training) => (
          <DisplayClientTraining training={training} key={training.trainingCode} />
        )))
        :(
          <div className="container d-flex align-items-center justify-content-center mt-5">
        <h2 className="text-warning">You are not enrolled on any training.</h2>
      </div>)}
      </div>
    </div>
  );
};
