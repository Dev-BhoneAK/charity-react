import React from 'react';
import {Link} from 'react-router-dom';

const ArticleCard = ({article}) => {
    return (
        <div className="col-md-12 col-lg-4 mb-5 mb-lg-0">
            <div
                className="card-container"
            >
                <div className="img-container position-relative">
                    <img src={article.image} alt={article.title}/>
                    <div
                        className="category-date-container px-4 py-2 position-absolute rounded-pill top-left"
                    >
                        <p>26 OCT</p>
                    </div>
                </div>
                <div className="content-container p-4">
                    <h4>{article.title}</h4>
                    <p>
                        {article.content.slice(0, 70)}...
                    </p>
                    <hr/>
                    <div
                        className="read-more d-flex align-items-center justify-content-between"
                    >
                        <p>read more</p>
                        <Link to={`/articles/${article.id}`} style={{textDecoration: 'none'}}>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ArticleSection = ({articles, loading, totalcards}) => {

    if(loading){
        return <div className="d-flex align-items-center justify-content-center"><div className="loading-circle"></div></div>
    }else {
        return (
            <section id="articles">
                <div className="container">
                    <div className="row text-center py-4">
                        <h2>Blogs & Articles</h2>
                    </div>
                    <div className="row overflow-hidden">
                        {
                            Object.keys(articles).map(index => {
                                if(index < totalcards){
                                    return (
                                        <ArticleCard article={articles[index]}/>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }

}
export default ArticleSection;