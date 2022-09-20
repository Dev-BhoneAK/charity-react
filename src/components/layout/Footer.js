import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="mt-5">
      <div className="container-fluid footer-background d-flex align-items-center justify-content-center">
        <div className="container mt-md-5">
          <div className="row footer-content">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="donate">
                <h3 className="mb-4 mt-5 mt-md-0">
                  Your Actions can Transform the Future of Humanity
                </h3>
                <button className="rounded-pill p-2 donate-now">
                  <span className="d-flex align-items-center justify-content-center">
                    <span className="icon-container d-flex align-items-center justify-content-center me-3">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                    <span className="text-container"> donate now </span>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mb-4">
              <div className="links">
                <h4>Links</h4>
                <ul className="p-0">
                  <li>Featured Causes</li>
                  <li>About us</li>
                  <li>Campaign</li>
                  <li>Events</li>
                  <li>Blogs</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mb-4">
              <div className="non-profit">
                <h4>Non Profit</h4>
                <ul className="p-0">
                  <li>Endangered Polars</li>
                  <li>Help Pandas</li>
                  <li>Royal Rhinos</li>
                  <li>Make Impact</li>
                  <li>Start Fundraising</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact">
                <h4>Contact</h4>
                <ul className="p-0">
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    needhelp@organization.com
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i> +(199) 786 543 21
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    106 Main Road, Bazaar Quarter, Maryland
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
