import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getDonationData } from "../actions/donations";
import SocialIconsContainer from "../components/common/SocialIconsContainer";
import { formatDate } from "../utils/helpers";
import ProgressBar from "../components/common/Progressbar";
import ScrollAnimation from "react-animate-on-scroll";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();
    return <Component {...props} router={{ params }} />;
  };

  return ComponentWithRouterProp;
};

const DonateDetail = ({ donation, loading, dispatch }) => {
  useEffect(() => {
    dispatch(getDonationData());
  }, []);
  const [percentage, setPercentage] = React.useState(0);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="loading-circle"></div>
      </div>
    );
  } else {
    return (
      <section id="donate">
        <div className="container my-5">
          <ScrollAnimation
            animateIn="flipInX"
            afterAnimatedIn={() =>
              setPercentage((donation.currentFund / donation.goalFund) * 100)
            }
          >
            <div className="row">
              <div className="col-md-7 col-lg-8">
                <div className="card-container mb-5">
                  <div className="img-container position-relative">
                    <img
                      src={donation.detailImage}
                      alt={`donation.label donation`}
                    />
                    <div className="category-date-container px-4 py-2 rounded-pill position-absolute bottom-left">
                      <p>{donation.label}</p>
                    </div>
                  </div>
                  <div className="progress-container px-3 container">
                    <div className="row px-2 py-3 align-items-center justify-content-center">
                      <div className="col-lg-8">
                        <ProgressBar percentage={percentage} />
                        <div className="statistics-container d-flex align-items-center justify-content-between">
                          <p>
                            <span className="currency">
                              ${donation.currentFund}{" "}
                            </span>
                            Raised
                          </p>
                          <p>
                            <span className="currency">
                              ${donation.goalFund}{" "}
                            </span>
                            Goal
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 d-flex justify-content-center">
                        <button
                          type="button"
                          className="rounded-pill p-2 donate-now"
                          data-bs-toggle="popover"
                          data-bs-placement="right"
                          data-bs-title="Contact Info"
                          data-bs-content="Please call +(199) 786 543 21"
                        >
                          <span className="d-flex align-items-center justify-content-center">
                            <span className="icon-container d-flex align-items-center justify-content-center me-3">
                              <i className="fa-solid fa-heart"></i>
                            </span>
                            <span className="text-container"> donate now </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="donate-summary my-4">
                  <h3 className="mb-3">Donation Summary</h3>
                  <p className="mid-grey">{donation.summary}</p>
                </div>
                <div className="donate-info">
                  <h4 className="mb-3">Food Donation for Flooded Area</h4>
                  <p className="mid-grey">{donation.detail}</p>
                </div>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="info-card-container d-flex align-items-center justify-content-center mb-3 px-2 pt-4 pb-3">
                  <div className="d-flex flex-column align-items-center">
                    <h4 className="mb-4">Fundraiser Info</h4>
                    <div className="info-card-content d-flex flex-md-column flex-lg-row align-items-start align-items-md-center align-items-lg-start">
                      <img
                        src="/charity-react/assets/images/organizer.jpg"
                        alt="Organizer Image"
                        className="me-2 align-center mb-md-3"
                      />
                      <div className="info-right d-flex flex-column align-items-start flex-grow-1">
                        <ul>
                          <li className="event-info-list">
                            <p>
                              Name: <span>{donation.fundraiserInfo.name}</span>
                            </p>
                          </li>
                          <li className="event-info-list">
                            <p>
                              Created:{" "}
                              <span>
                                {formatDate(
                                  donation.fundraiserInfo.created,
                                  "long"
                                )}
                              </span>
                            </p>
                          </li>
                          <li className="event-info-list">
                            <p>
                              Phone:{" "}
                              <span>{donation.fundraiserInfo.phone}</span>
                            </p>
                          </li>
                          <li className="event-info-list">
                            <p>
                              <i className="fa-solid fa-location-dot"></i>{" "}
                              {donation.fundraiserInfo.location}
                            </p>
                          </li>
                          <li className="event-info-list">
                            <p>
                              <i className="fa-solid fa-tag"></i>{" "}
                              {donation.label}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <SocialIconsContainer page="Donation" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    );
  }
};
const mapStateToProps = ({ donations, loading }, props) => {
  const { donation_id } = props.router.params;
  const donationIndex = Object.keys(donations).filter(
    (donationIndex) => donations[donationIndex]._id == donation_id
  );
  const donation = donations[donationIndex];
  return {
    donation,
    loading,
  };
};
export default withRouter(connect(mapStateToProps)(DonateDetail));
