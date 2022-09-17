import React, {useEffect} from 'react';
import {getEventData} from '../actions/events';
import {connect} from "react-redux";
import EventSection from "../components/home/EventSection";

const Events = ({dispatch, events, loading}) => {

    useEffect(() => {
        dispatch(getEventData());
    }, []);
    return (
        <>
            <EventSection events={events} loading={loading} totalcards={6}/>
        </>
    )
}

const mapStateToProps = ({events, loading}) => ({ events, loading });
export default connect(mapStateToProps)(Events);
