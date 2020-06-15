import React from 'react';
import "./infobar.css";
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";
const Infobar=({room})=>(
    <div className="infoBar">
      <div className="leftInnerContainer">
         <img className="onlineIcon" src={onlineIcon} alt="jay"/>
         <h3>{room}</h3>
      </div>
      <div className="RightInnerContainer">
        <a href="/"><img src={closeIcon} alt="close"/></a>
      </div> 
    </div>
)

export default Infobar;