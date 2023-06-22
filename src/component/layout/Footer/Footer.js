import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>SmartCart</h1>
        <p>High Quality is our first priority</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/aryanbichpuria1910">Instagram</a>
        <a href="https://www.linkedin.com/in/aryan-bichpuria-224081203/">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
