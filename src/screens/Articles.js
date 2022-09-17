import React, {useEffect} from 'react';
import AOS from "aos";
import {getDonationData} from "../actions/donations";
import {getEventData} from "../actions/events";
import {getArticleData} from "../actions/articles";

const Blogs = ({dispatch}) => {

    useEffect(() => {
        AOS.init({});
        dispatch(getArticleData());
    }, []);
    return (
        <div>
            <h1>Blogs</h1>
        </div>
    )
}
export default Blogs;