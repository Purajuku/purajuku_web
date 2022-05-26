import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

import "../big_card.css"

const BigCard = ({ icon, name, mainDescription, subDescription }) => {
    return (
        <div className="display-big-card">
            <div className="big-card-profile">
                <img src={icon} alt={name} />
                <h4> {name}</h4>
                <a href="https://twitter.com/tererun1" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
            <div className="big-card-description">
                <p>{mainDescription}</p>
                <p>{subDescription}</p>
            </div>
        </div>
    );
};

export default BigCard;