import * as React from "react";

import "../card.css"

const Card = ({ icon, title, description }) => {
    return (
        <div className="display-card">
            <h4>{icon} {title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Card;