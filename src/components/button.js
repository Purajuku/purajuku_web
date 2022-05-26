import * as React from "react";

import "../button.css";

const MainButton = ({ text, color, url }) => (
    <div className="main-button" style={{"background-color": color}}>
        <a href={url}>
            {text}
        </a>
    </div>
);

export default MainButton;