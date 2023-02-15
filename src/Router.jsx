import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./components/Error";
import Logement from "./pages/Logement";
import About from "./pages/About";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home/>}
                    errorElement={<Error/>}
                />,
                <Route
                    path="/logements/:id"
                    element={<Logement/>}
                    errorElement={<Error/>}
                />,
                <Route
                    path="/about"
                    element={<About/>}
                    errorElement={<Error/>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;