import React, {useEffect} from 'react';
import Header from '../components/layout/Header';
import AOS from 'aos';
import { Line, Circle } from 'rc-progress';
import {connect} from "react-redux";
import {getDonationData} from '../actions/donations';

const Home = () => {
    useEffect(() => {
        AOS.init({});
        // document.addEventListener("aos:in", ({ detail }) => {}
    }, []);

    return (
        <div>
            <section id="popular">
                <div className="container my-5">
                    <div className="row py-4 text-center">
                        <h2>Featured Donations</h2>
                    </div>
                    <div className={"row"}>
                        <div className="col-lg-4 col-md-12 mb-5">
                            <div className="card-container" data-aos="fade-in">
                                <div className="img-container position-relative">
                                    <img src="assets/images/panda-donation.jpg" alt=""/>
                                    <div
                                        className="category-date-container px-4 py-2 rounded-pill position-absolute bottom-left"
                                    >
                                        <p>help</p>
                                    </div>
                                </div>
                                <div className="progress-container px-3 pt-5 pb-3">
                                    <div className="progressbar-item">
                                        <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" />

                                    </div>
                                    <div
                                        className="statistics-container d-flex align-items-center justify-content-between"
                                    >
                                        <p><span className="currency">$14,000 </span>Raised</p>
                                        <p><span className="currency">$30,000 </span>Goal</p>
                                    </div>
                                </div>
                                <div className="content-container mx-3 my-3">
                                    <h4>Help Endangered Species, Pandas</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                                        animi illum corrupti...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-5">
                            <div className="card-container" data-aos="fade-in">
                                <div className="img-container position-relative">
                                    <img src="assets/images/rhinos-donation.jpg" alt=""/>
                                    <div
                                        className="category-date-container px-4 py-2 rounded-pill position-absolute bottom-left"
                                    >
                                        <p>endanger</p>
                                    </div>
                                </div>
                                <div className="progress-container px-3 pt-5 pb-3">
                                    <div className="progressbar-item">
                                        <div progress-bar data-percentage="75%">
                                            <div className="progress-number">
                                                <div className="progress-number-mark bg-info">
                                                    <span className="percent"></span>
                                                    <span className="down-arrow bg-info"></span>
                                                </div>
                                            </div>
                                            <div className="progress-bg">
                                                <div className="progress-fill bg-info"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="statistics-container d-flex align-items-center justify-content-between"
                                    >
                                        <p><span className="currency">$45,270 </span>Raised</p>
                                        <p><span className="currency">$60,000 </span>Goal</p>
                                    </div>
                                </div>
                                <div className="content-container mx-3 my-3">
                                    <h4>Save Endangered Species, Royal Rhinos</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                                        animi illum corrupti...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-5">
                            <div className="card-container" data-aos="fade-in">
                                <div className="img-container position-relative">
                                    <img src="assets/images/polar-bear-donation.jpg" alt=""/>
                                    <div
                                        className="category-date-container px-4 py-2 rounded-pill position-absolute bottom-left"
                                    >
                                        <p>pollution</p>
                                    </div>
                                </div>
                                <div className="progress-container px-3 pt-5 pb-3">
                                    <div className="progressbar-item">
                                        <div progress-bar data-percentage="95%">
                                            <div className="progress-number">
                                                <div className="progress-number-mark bg-success">
                                                    <span className="percent"></span>
                                                    <span className="down-arrow bg-success"></span>
                                                </div>
                                            </div>
                                            <div className="progress-bg">
                                                <div className="progress-fill bg-success"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="statistics-container d-flex align-items-center justify-content-between"
                                    >
                                        <p><span className="currency">$75,000 </span>Raised</p>
                                        <p><span className="currency">$80,000 </span>Goal</p>
                                    </div>
                                </div>
                                <div className="content-container mx-3 my-3">
                                    <h4>Save Endangered Species, Polar Bears</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                                        animi illum corrupti...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;