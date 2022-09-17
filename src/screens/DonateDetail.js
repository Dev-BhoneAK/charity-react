import React from 'react';

const DonateDetail = () => {

    return (
        <section id="donate">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card-container mb-5">
                            <div className="img-container position-relative">
                                <img src="/assets/images/flood.jpg" alt="flood dontaion"/>
                                <div
                                    className="category-date-container px-4 py-2 rounded-pill position-absolute bottom-left"
                                >
                                    <p>flood</p>
                                </div>
                            </div>
                            <div className="progress-container px-3 container">
                                <div
                                    className="row px-2 py-3 align-items-center justify-content-center"
                                >
                                    <div className="col-md-8">
                                        <div className="progressbar-item">
                                            <div progress-bar data-percentage="30%">
                                                <div className="progress-number pt-3">
                                                    <div className="progress-number-mark bg-warning">
                                                        <span className="percent"></span>
                                                        <span className="down-arrow bg-warning"></span>
                                                    </div>
                                                </div>
                                                <div className="progress-bg">
                                                    <div className="progress-fill bg-warning"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="statistics-container d-flex align-items-center justify-content-between"
                                        >
                                            <p><span className="currency">$10,270 </span>Raised</p>
                                            <p><span className="currency">$30,000 </span>Goal</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-center">
                                        <button
                                            type="button"
                                            className="rounded-pill p-2 donate-now"
                                            data-bs-toggle="popover"
                                            data-bs-placement="right"
                                            data-bs-title="Contact Info"
                                            data-bs-content="Please call +(199) 786 543 21"
                                        >
                      <span
                          className="d-flex align-items-center justify-content-center"
                      >
                        <span
                            className="icon-container d-flex align-items-center justify-content-center me-3"
                        >
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
                            <p className="mid-grey">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Adipisci tempora corporis perferendis repudiandae harum
                                temporibus eaque tempore iusto porro. Atque asperiores
                                laudantium molestias ab at accusamus praesentium quidem eaque!
                                Recusandae.
                            </p>
                        </div>
                        <div className="donate-info">
                            <h4 className="mb-3">Food Donation for Flooded Area</h4>
                            <p className="mid-grey">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Aliquam consequuntur in incidunt quae porro voluptatibus.
                                Reiciendis aspernatur voluptatibus maxime distinctio, cupiditate
                                quisquam doloremque, molestias animi numquam quam, facilis
                                provident ut. Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Vel, rerum suscipit necessitatibus cumque
                                facere pariatur expedita voluptatem ex mollitia eveniet harum,
                                consequatur facilis aut repellat, delectus explicabo fuga
                                accusamus adipisci! Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Deserunt veniam illo unde libero corporis
                                autem nostrum, asperiores assumenda neque. Qui laboriosam quos
                                minima recusandae quo impedit sunt eaque dolore maiores!
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div
                            className="info-card-container d-flex align-items-center justify-content-center mb-3 px-2 pt-4 pb-3"
                        >
                            <div className="d-flex flex-column align-items-center">
                                <h4 className="mb-4">Fundraiser Info</h4>
                                <div className="info-card-content d-flex align-items-start">
                                    <img
                                        src="/assets/images/organizer.jpg"
                                        alt="Organizer Image"
                                        className="me-2"
                                    />
                                    <div
                                        className="info-right d-flex flex-column align-items-start flex-grow-1"
                                    >
                                        <ul>
                                            <li className="event-info-list">
                                                <p>Name: <span>Anonymous</span></p>
                                            </li>
                                            <li className="event-info-list">
                                                <p>Created: <span>10 September, 2022</span></p>
                                            </li>
                                            <li className="event-info-list">
                                                <p>Phone: <span>+(199) 786 543 21</span></p>
                                            </li>
                                            <li className="event-info-list">
                                                <p>
                                                    <i className="fa-solid fa-location-dot"></i> Maryland, USA
                                                </p>
                                            </li>
                                            <li className="event-info-list">
                                                <p><i className="fa-solid fa-tag"></i> flood</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="info-card-container d-flex align-items-center justify-content-center p-5"
                        >
                            <div
                                className="info-card-content d-flex flex-column align-items-center"
                            >
                                <h4 className="mb-3">Share Donation</h4>
                                <div className="social-icons d-flex align-items-center">
                                    <div
                                        className="icon-container d-flex align-items-center justify-content-center me-3"
                                    >
                                        <i className="fa-brands fa-twitter"></i>
                                    </div>
                                    <div
                                        className="icon-container d-flex align-items-center justify-content-center me-3"
                                    >
                                        <i className="fa-brands fa-facebook"></i>
                                    </div>
                                    <div
                                        className="icon-container d-flex align-items-center justify-content-center me-3"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </div>
                                    <div
                                        className="icon-container d-flex align-items-center justify-content-center me-3"
                                    >
                                        <i className="fa-brands fa-twitch"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DonateDetail;