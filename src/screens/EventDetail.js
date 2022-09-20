import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SocialIconsContainer from "../components/common/SocialIconsContainer";
import { getEventData } from "../actions/events";
import { getArticleData } from "../actions/articles";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();
    return <Component {...props} router={{ params }} />;
  };

  return ComponentWithRouterProp;
};
const EventDetail = ({ dispatch, event, loading }) => {
  useEffect(() => {
    dispatch(getEventData());
  }, []);

  const separteDateMonth = (datemonth) => {
    const returnedDate = formatDate(event?.date, "short");
    const dateMontArr = returnedDate.split(" ");
    return datemonth === "date" ? dateMontArr[1] : dateMontArr[0];
  };

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="loading-circle"></div>
      </div>
    );
  } else {
    return (
      <section id="event-detail">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12">
              <div className="img-container position-relative">
                <img
                  src={event?.imageDetail}
                  alt=""
                  className="all-round-borders"
                />
                <div className="category-date-container text-center px-lg-4 py-lg-3 px-3 py-2 position-absolute top-0 rounded-border">
                  <p>{separteDateMonth("date")}</p>
                  <p>{separteDateMonth("month")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-7 col-lg-8">
              <div className="event-summary mb-5">
                <h3 className="mb-3">Event Summary</h3>
                <p className="mid-grey">{event?.summary}</p>
              </div>
              <div className="event-info">
                <h4 className="mb-3">Event Detail</h4>
                <p className="mid-grey">{event?.detail}</p>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="info-card-container d-flex align-items-center justify-content-center mb-3 px-2 pt-5 pb-3">
                <div className="info-card-content d-flex flex-column align-items-center">
                  <h4 className="mb-3">Event Info</h4>
                  <ul>
                    <li className="event-info-list">
                      <p>
                        Time: <span>{event?.time}</span>
                      </p>
                    </li>
                    <li className="event-info-list">
                      <p>
                        Date: <span>{formatDate(event?.date, "long")}</span>
                      </p>
                    </li>
                    <li className="event-info-list">
                      <p>
                        Location: <span>{event?.location}</span>
                      </p>
                    </li>
                    <li className="event-info-list">
                      <p>
                        Phone: <span>{event?.phone}</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <SocialIconsContainer page="Event" />
            </div>
          </div>
        </div>
      </section>
    );
  }
};
const mapStateToProps = ({ events, loading }, props) => {
  const { event_id } = props.router.params;
  const eventIndex = Object.keys(events).filter(
    (eventIdex) => events[eventIdex].id == event_id
  );
  console.log("event id", event_id);
  return {
    event: events[eventIndex],
    loading,
  };
};
export default withRouter(connect(mapStateToProps)(EventDetail));
