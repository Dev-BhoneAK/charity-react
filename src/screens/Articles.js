import React, {useEffect} from 'react';
import {getArticleData} from "../actions/articles";
import {connect} from "react-redux";
import ArticleSection from "../components/home/ArticleSection";

const Articles = ({dispatch, articles, loading}) => {

    useEffect(() => {
        dispatch(getArticleData());
    }, []);
    return (
        <>
            <ArticleSection articles={articles} loading={loading} totalcards={6}/>
        </>
    )
}

const mapStateToProps = ({articles, loading}) => ({ articles, loading });
export default connect(mapStateToProps)(Articles);
