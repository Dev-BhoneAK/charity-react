import React from 'react';

const Jumbotron = ({location}) => {

    const breadcrumbArr = location.pathname.split("/");
    return (
        <section className="header-detail position-relative">
            <div className="header-detail-container position-relative">
                <img src="assets/images/jumbotron.jpg" alt="" className="jumbotron"/>
                <div className="header-detail-content">
                    <h1 className="custom-header-sm" style={{textTransform: "capitalize"}}>{breadcrumbArr[1]} Detail</h1>
                    <nav aria-label="breadcrumb" className="mt-3">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item custom-breadcrumb-item">
                                <a href="#">{breadcrumbArr[1]}</a>
                            </li>
                            <li
                                className="breadcrumb-item custom-breadcrumb-item"
                                aria-current="page"
                            >
                                Detail
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    )
}
export default Jumbotron;