import React from 'react';
import {Link} from "react-router-dom";
import "./header.css";
import RedLogo from "../../assets/logo_red.png";

const Header = () => {
    return (
        <div onLoad={() => changeNavStatusListener()} className="header">
            <img src={RedLogo} alt="Logo Kasa rouge"/>
            <nav>
                <Link className="link" to="/"><span id="/">Accueil</span></Link>
                <Link className="link" to="/about"><span id="/about">À propos</span></Link>
            </nav>
        </div>
    );
};


/**
 * Apply a border-bottom to the current page link in the header based on the current url
 */
function changeNavStatusListener() {
    const linkArray = document.querySelectorAll(".link span");
    linkArray.forEach(link => {
        if (link.getAttribute("id") === window.location.pathname)
            link.style.borderBottom = "#FF6060 solid 2px";
        else
            link.style.borderBottom = "none";
    });
}

export default Header;