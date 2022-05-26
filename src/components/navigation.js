import * as React from "react"

import PuraJukuIcon from "../images/purajuku_icon.png"

import "../navigation.css"

const Navigation = () => {
  return (
    <div className="global-navigation">
        <a href="/">
          <img src={PuraJukuIcon} alt="purajuku_icon" className="navigation-logo"></img>
        </a>
    </div>
  )
}

export default Navigation
