import * as React from "react";

import Banner from "../images/banner_transparency.png"

import "../header.css";

const MainHeader = () => (
    <header>
        <div className="main-header-container">
            <img src={Banner} alt="purajuku_banner" className="main-header-banner"></img>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#5c8d89" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,101.3C480,85,600,75,720,85.3C840,96,960,128,1080,133.3C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </header>
);

export default MainHeader;
