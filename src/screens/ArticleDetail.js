import React from 'react';
import {useParams} from "react-router-dom";
import {getArticleData} from "../actions/articles";
import {useEffect} from "@types/react";
import {connect} from "react-redux";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let params = useParams();
        return <Component {...props} router={{ params }} />;
    };

    return ComponentWithRouterProp;
};

const ArticleDetail = ({dispatch, article, loading}) => {

    useEffect(() => {
        dispatch(getArticleData());
    }, []);

    return (
        <section id="donate">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card-container mb-5">
                            <div className="img-container position-relative">
                                <img
                                    src={article.imageDetail}
                                    alt=""
                                    className="all-round-borders"
                                />
                                <div
                                    className="category-date-container top-left px-4 py-2 rounded-pill position-absolute"
                                >
                                    <p>25 SEP</p>
                                </div>
                            </div>
                        </div>
                        <div className="donate-info my-4">
                            <h3 className="mb-3">{article.title}</h3>
                            <p className="mid-grey">
                                {article.content}
                            </p>
                            <p className="mid-grey">
                                {article.content}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div
                            className="info-card-container d-flex align-items-center justify-content-center mb-3 px-2 pt-4 pb-2"
                        >
                            <div
                                className="d-flex flex-column align-items-center justify-content-center"
                            >
                                <h4 className="mb-4">Latest Blogs</h4>
                                <ul className="info-card-content">
                                    <li className="latest-blog-list d-flex align-items-center">
                                        <img
                                            src="/assets/images/panda-donation.jpg"
                                            alt="Panda Image"
                                            className="me-2"
                                        />
                                        <p className="latest-blog-title">
                                            Save Endangered Species, Giant Pandas
                                        </p>
                                    </li>
                                    <li className="latest-blog-list d-flex align-items-center">
                                        <img
                                            src="/assets/images/rhinos-donation.jpg"
                                            alt="Rhino Image"
                                            className="me-2"
                                        />
                                        <p className="latest-blog-title">
                                            Save Endangered Species, Royal Rhinos
                                        </p>
                                    </li>
                                    <li className="latest-blog-list d-flex align-items-center">
                                        <img
                                            src="/assets/images/polar-bear-donation.jpg"
                                            alt="Polar Bear Image"
                                            className="me-2"
                                        />
                                        <p className="latest-blog-title">
                                            Save Endangered Species, Polar Bears
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="info-card-container d-flex align-items-center justify-content-center p-5"
                        >
                            <div
                                className="info-card-content d-flex flex-column align-items-center"
                            >
                                <h4 className="mb-3">Share Blog</h4>
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
const mapStateToProps = ({articles, loading}, props) => {
    const {article_id} = props.router.params;
    const articleIndex = Object.keys(articles).filter(articleIndex => articles[articleIndex].id == article_id);
    return {
        article: articles[articleIndex],
        loading
    };
};
export default withRouter(connect(mapStateToProps)(ArticleDetail));