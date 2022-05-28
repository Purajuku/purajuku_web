import * as React from "react";

import "../button.css";

const MainButton = ({ text, color, url }) => (
    <div className="main-button-wrapper">
        <a href={url} rel="noopener">
        <div className="main-button" style={{"backgroundColor": color}}>
            {text}
        </div>
    </a>
    </div>
);

export default MainButton;