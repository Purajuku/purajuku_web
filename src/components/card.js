import * as React from "react";

import "../card.css"

const Card = ({ icon, title, description, url }) => {
    return (
        <a href={url}>
            <div className="display-card">
                <h4>{icon} {title}</h4>
                <p>{description}</p>
            </div>
        </a>
    );
};

export default Card;