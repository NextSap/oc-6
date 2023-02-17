import React from 'react';
import WhiteLogo from "../../assets/logo_white.png";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <img src={WhiteLogo} alt="Logo blanc Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;