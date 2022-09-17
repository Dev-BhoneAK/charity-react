import React from 'react';

const SocialIconsContainer = ({page}) => {

    return (
        <div
            className="info-card-container d-flex align-items-center justify-content-center p-5"
        >
            <div
                className="info-card-content d-flex flex-column align-items-center"
            >
                <h4 className="mb-3">Share {page}</h4>
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
    )
}
export default SocialIconsContainer;