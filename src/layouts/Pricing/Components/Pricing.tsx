import CurrencyUtils from "../../../utils/CurrencyUtils";
import "./Components.css";

export const Pricing = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center py-3 mt-1 mb-1">
        <h1>Price list</h1>
      </div>
      <div className="container d-flex justify-content-center align-items-center py-1">
        <p className="lead">
          We offer three types of gym memberships. Details are in the table:
        </p>
      </div>

      <div
        id="pricing-table"
        className="d-flex justify-content-center align-items-center py-3"
      >
        <table className="table table-bordered text-dark">
          <thead id="thead-price-table" className="text-white">
            <tr>
              <th scope="col">
                <p className="d-flex justify-content-center align-items-center">
                  #
                </p>
              </th>
              <th scope="col">
                <p className="d-flex justify-content-center align-items-center">
                  Normal
                </p>
              </th>
              <th scope="col">
                <p className="d-flex justify-content-center align-items-center">
                  Premium
                </p>
              </th>
              <th scope="col">
                <p className="d-flex justify-content-center align-items-center">
                  Master
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <p className="d-flex justify-content-center align-items-center mt-3">
                  Posibilities
                </p>
              </th>
              <td>
                <p className="d-flex justify-content-center align-items-center">
                  Entitles you to use the gym equipment without participating in
                  group training.
                </p>
              </td>
              <td>
                <p className="d-flex justify-content-center align-items-center">
                  Entitles you to use exercise equipment. You can sign up for
                  group training.
                </p>
              </td>
              <td>
                <p className="d-flex justify-content-center align-items-center">
                  Same as Premium. Additionally, two group training sessions per
                  month are free.
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="d-flex justify-content-center align-items-center">
                  Bonus
                </p>
              </th>
              <td>
                <p className="d-flex justify-content-center align-items-center">
                  -
                </p>
              </td>
              <td>
                <p className="d-flex justify-content-center align-items-center">
                  Training with a personal trainer once a month for free.
                </p>
              </td>
              <td>
                <p className="d-flex justify-content-center align-items-center">
                  Training with a personal trainer twice a month for free.
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="d-flex justify-content-center align-items-center">
                  Price
                </p>
              </th>
              <td>
                <p className="d-flex justify-content-center align-items-center">
                  {CurrencyUtils.formatToPLN(90)}
                </p>
              </td>
              <td>
                <p className="d-flex justify-content-center align-items-center">
                  {CurrencyUtils.formatToPLN(120)}
                </p>
              </td>
              <td>
                <p className="d-flex justify-content-center align-items-center">
                  {CurrencyUtils.formatToPLN(150)}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
