import React from 'react';
import {useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.status}</i><i>{error.statusText}</i>
            </p>
        </div>
    );
};

export default Error;