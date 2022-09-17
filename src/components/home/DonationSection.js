import React from 'react';
import {Line} from "rc-progress";
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import ProgressBar from '../../components/common/Progressbar';

const DonationCard = ({donation}) => {

    const [percentage, setPercentage] = React.useState(0);

    // const percentage = (donation.currentFund / donation.goalFund) * 100;
    // const percent = 0.9;
    // const baseLength = 320;
    return (
            <div className="col-lg-4 col-md-12 mb-5">
                <Link to={`/donations/${donation.id}`} style={{textDecoration: 'none'}}>
                    <ScrollAnimation animateIn='flipInX' afterAnimatedIn={() => setPercentage((donation.currentFund / donation.goalFund) * 100)}>
                        <div className="card-container">
                            <div className="img-container position-relative">
                                <img src={donation.image} alt=""/>
                                <div
                                    className="category-date-container px-4 py-2 rounded-pill position-absolute bottom-left"
                                >
                                    <p>{donation.label}</p>
                                </div>
                            </div>
                            <div className="progress-container px-3 pt-5 pb-3">
                                <ProgressBar percentage={percentage}/>

                                {/*<div className="progressbar-item">*/}
                                {/*    <div>*/}
                                {/*        <div className="progress-number">*/}
                                {/*            <div className="progress-number-mark bg-warning">*/}
                                {/*                <span className="percent">45%</span>*/}
                                {/*                <span className="down-arrow bg-warning"></span>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className="progress-bg">*/}
                                {/*            <div className="progress-fill bg-warning"></div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div
                                    className="statistics-container d-flex align-items-center justify-content-between"
                                >
                                    <p><span className="currency">${donation.currentFund} </span>Raised</p>
                                    <p><span className="currency">${donation.goalFund} </span>Goal</p>
                                </div>
                            </div>
                            <div className="content-container mx-3 my-3">
                                <h4>{donation.title}</h4>
                                <p>
                                    {donation.summary.slice(0, 70)}...
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>

                </Link>
            </div>
    );
}

const DonationSection = ({donations, loading, totalcards}) => {



    if(loading){
        return <div className="d-flex align-items-center justify-content-center"><div className="loading-circle"></div></div>
    }else{
        return (
            <section id="donation">
                <div className="container my-5">
                    <div className="row py-4 text-center">
                        <h2>Featured Donations</h2>
                    </div>
                    <div className={"row"}>
                        {
                            Object.keys(donations).map(index => {
                                if(totalcards > index){
                                    return (
                                        <DonationCard donation={donations[index]} />
                                    )
                                }
                            })
                        }

                    </div>
                </div>
            </section>
        );
    }
    }
export default DonationSection;