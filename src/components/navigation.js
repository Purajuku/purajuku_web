import * as React from "react"

import PuraJukuIcon from "../images/purajuku_icon.png"

import "../navigation.css"

const Navigation = ({ location, title, children }) => {
  return (
    <div className="global-navigation">
        <img src={PuraJukuIcon} className="Navigation"></img>
    </div>
  )
}

export default Navigation
