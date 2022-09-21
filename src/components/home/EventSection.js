import React from "react";
import { formatDate } from "../../utils/helpers";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const separteDateMonth = (datemonth) => {
    const returnedDate = formatDate(event?.date, "short");
    const dateMontArr = returnedDate.split(" ");
    return datemonth === "date" ? dateMontArr[1] : dateMontArr[0];
  };

  return (
    <div className="col-lg-4 col-md-12 mb-5">
      <Link to={`/events/${event._id}`} style={{ textDecoration: "none" }}>
        <div className="card-container">
          <div className="img-container position-relative">
            <img src={event?.image} alt={event?.title} />
            <div className="category-date-container text-center px-4 py-3 position-absolute top-0 rounded-border">
              <p>{separteDateMonth("date")}</p>
              <p>{separteDateMonth("month")}</p>
            </div>
          </div>
          <div className="content-container p-5">
            <h4>{event?.title}</h4>
            <div className="time-place-container">
              <p>
                <i className="fa-solid fa-clock"></i> {event?.time}
              </p>
              <p>
                <i className="fa-solid fa-location-dot"></i> {event?.location}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const EventSection = ({ events, loading, totalcards }) => {
  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="loading-circle"></div>
      </div>
    );
  } else {
    return (
      <section id="events" className="my-5">
        <div className="container">
          <div className="row text-center py-4">
            <h2>Upcoming Events</h2>
          </div>
          <div className="row">
            {Object.keys(events).map((index) => {
              if (index < totalcards) {
                return <EventCard event={events[index]} />;
              }
            })}
          </div>
        </div>
      </section>
    );
  }
};
export default EventSection;
