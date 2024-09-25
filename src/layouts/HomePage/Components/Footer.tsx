import { Link } from "react-router-dom";


export const Footer = () => {
  
  function scroll(){
    window.scrollTo(0,0);
  }

  return (
    <div id="footer">
      <footer className="container d-flex flex-wrap align-items-center py-4">
        <div className="col-md-4 text-white ">
          <p id="opening-hours" className="col-md-4 text-white">
            Opening hours:
          </p>
          <p id="opening-hours" className="col-md-4 text-white">
            Mon.-Fri.: <br/>
            6:00am - 10:00pm
          </p>
          <p id="opening-hours" className="col-md-4 text-white">
            Sat.-Sun.: <br/>
            9:00am - 6:00pm
          </p>
        </div>
        <ul className="nav navbar-dark col-md-8 d-flex justify-content-end">
          <li className="nav-item">
            <Link onClick={scroll} className="nav-link px-2 text-white" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={scroll} className="nav-link px-2 text-white" to="/training">
              Search trainings
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={scroll} className="nav-link px-2 text-white" to="/client/bmi">
              BMI calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={scroll} className="nav-link px-2 text-white" to="/client/calorie">
              Calorie calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={scroll} className="nav-link px-2 text-white" to="/pricing">
              Price list
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={scroll} className="nav-link px-2 text-white" to="/client/data">
              Client details
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={scroll} className="nav-link px-2 text-white" to="/training/client">
              Client's training
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
