import React from 'react';
import {useLocation} from "react-router-dom";

import CustomNav from './CustomNav';
import MainSlider from "./MainSlider";
import Jumbotron from "./Jumbotron";

function Header() {
    const location = useLocation();
    console.log('location ', location.pathname);
    return (
        <header className="position-relative">
            <CustomNav />
            {location.pathname === '/' ? <MainSlider />: <Jumbotron location={location}/>}
        </header>
    );
}

export default Header;