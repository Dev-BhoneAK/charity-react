import React, {useEffect} from 'react';
import {getDonationData} from '../actions/donations';
import {connect} from "react-redux";
import DonationSection from "../components/home/DonationSection";

const Donate = ({dispatch, donations, loading}) => {

    useEffect(() => {
        dispatch(getDonationData());
    }, []);
    return (
        <>
            <DonationSection donations={donations} loading={loading} totalcards={6}/>
        </>
    )
}

const mapStateToProps = ({donations, loading}) => ({ donations, loading });
export default connect(mapStateToProps)(Donate);
