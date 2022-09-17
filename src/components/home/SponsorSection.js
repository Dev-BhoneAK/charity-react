import React from 'react';
import Slider from 'react-slick';

const SponsorSection = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <section id="sponsor">
            <div className="container custom-border">
                <div
                    className="row d-flex align-items-center justify-content-center custom-height"
                >
                    <div className="autoplay">
                        <Slider {...settings}>
                            <div className="img-container">
                                <img src="assets/images/brand-1.png" alt=""/>
                            </div>
                            <div className="img-container">
                                <img src="assets/images/brand-2.png" alt=""/>
                            </div>
                            <div className="img-container">
                                <img src="assets/images/brand-3.png" alt=""/>
                            </div>
                            <div className="img-container">
                                <img src="assets/images/brand-4.png" alt=""/>
                            </div>
                            <div className="img-container">
                                <img src="assets/images/brand-5.png" alt=""/>
                            </div>
                            <div className="img-container">
                                <img src="assets/images/brand-3.png" alt=""/>
                            </div>
                            <div className="img-container">
                                <img src="assets/images/brand-2.png" alt=""/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SponsorSection;