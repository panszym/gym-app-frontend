import { Link } from "react-router-dom";

export const Offer = () => {
  return (
    <div>
      <div
        id="what-we-offer"
        className="d-flex justify-content-center align-items-center py-4"
      >
        <h1>What we offer</h1>
      </div>
      <div className="d-none d-lg-block">
        <div className="row g-0">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-upper"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Do you like sport?</h1>
              <p className="lead">
                If you are a active person, this is a great place for you. We
                offer two exercise rooms and one fitness room. In our gym you
                will find advances equipment that is in good condition. If you
                are interested, check out our season ticket offer.
              </p>
              <Link className="btn main-color btn-lg text-white" to="/pricing">
                View more
              </Link>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Training section</h1>
              <p className="lead">
                Our gym also offers a wide range of activities, which take place
                under the supervision of qualified specialists. Our trainers are
                experienced and love their job. If you are interested, check out
                our season ticket offer. To see the activity offer, click the
                button below and find out about group trainings at our gym.
              </p>
              <Link className="btn main-color btn-lg text-white" to="/training">
                View more
              </Link>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-bottom"></div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-upper"></div>
            <div className="mt-2">
              <h1>Do you like sport?</h1>
              <p className="lead">
                If you are a active person, this is a great place for you. We
                offer two exercise rooms and one fitness room. In our gym you
                will find advances equipment that is in good condition. If you
                are interested, check out our season ticket offer.
              </p>
              <Link className="btn main-color btn-lg text-white" to="/pricing">
                View more
              </Link>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-bottom"></div>
            <div className="mt-2">
              <h1>Training section</h1>
              <p className="lead">
                Our gym also offers a wide range of activities, which take place
                under the supervision of qualified specialists. Our trainers are
                experienced and love their job. If you are interested, check out
                our season ticket offer. To see the activity offer, click the
                button below and find out about group trainings at our gym.
              </p>
              <Link className="btn main-color btn-lg text-white" to="/training">
                View more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
