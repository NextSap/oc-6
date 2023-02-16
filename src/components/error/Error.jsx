import React from 'react';
import {useNavigate, useRouteError} from "react-router-dom";
import "./error.css";
import Header from "../header/Header";

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="error">
            <Header/>
            <div className="error-container">
                <div>
                    <h1>{error.status}</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <p onClick={() => {
                    navigate("/")
                }} className="backlink">Retourner sur la page d'accueil</p>
            </div>
        </div>
    );
};

export default Error;