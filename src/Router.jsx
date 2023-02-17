import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Accommodations from "./pages/accommodations/Accommodations";
import About from "./pages/about/About";
import Error from "./components/error/Error";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={<Error/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="accommodations/:id" element={<Accommodations/>}/>
            <Route path="about" element={<About/>}/>
        </Route>
    )
);