import React from 'react';
import {useNavigate, useRouteError} from "react-router-dom";
import "./error.css";

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="error">
            <div>
                <h1>{error.status}</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <p onClick={() => {
                navigate("/")
            }} className="backlink">Retourner sur la page d'accueil</p>
        </div>
    );
};

export default Error;