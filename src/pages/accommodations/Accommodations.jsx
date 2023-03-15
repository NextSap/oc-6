import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import accommodations from "../../accommodations.json";
import Header from "../../components/header/Header";
import Tag from "../../components/tag/Tag";
import Collapse from "../../components/collapse/Collapse";
import Slideshow from "../../components/slideshow/Slideshow";
import "./accommodations.css";
import Red from "../../assets/red_star.png";
import Grey from "../../assets/grey_star.png";
import Footer from "../../components/footer/Footer";


const Accommodations = () => {
    const {id} = useParams();
    const [phoneVue, setPhoneVue] = useState(isPhoneVue());
    const accommodation = getAccommodationById(id);

    useEffect(() => {
        createStars(accommodation.rating);
        window.addEventListener("resize", () => setPhoneVue(isPhoneVue()));
        window.scrollTo(0, 0);
    })

    return (
        <div className="accommodations">
            <Header/>
            <div className="accommodations-container">
                <Slideshow pictures={accommodation.pictures}/>
                <div className="informations-section">
                    <div className="article-header">
                        <div className="title">
                            <h1>{accommodation.title}</h1>
                            <h2>{accommodation.location}</h2>
                            <div className="tags">
                                {accommodation.tags.map((tag, index) => {
                                    return (<Tag key={index}>{tag}</Tag>);
                                })}
                            </div>
                        </div>
                        <div className="owner">
                            <div className="host">
                                <p>{accommodation.host.name}</p>
                                <img src={accommodation.host.picture} alt={accommodation.host.name}/>
                            </div>
                            <div onLoad={() => createStars(accommodation.rating)} className="rating">
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <Collapse name="Description" content={accommodation.description} minHeightContent={"250px"}
                                  width={phoneVue ? "100%" : ""}/>
                        <Collapse name="Équipements" content={arrayToString(accommodation.equipments)}
                                  minHeightContent={"250px"} width={phoneVue ? "100%" : ""}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

/**
 * Get accommodation by its id from the accommodations.json file
 * @param {String} id - the id of the accommodation
 * @returns {JSON} - the accommodation object
 */
function getAccommodationById(id) {
    let returnAccommodation;
    accommodations.forEach(accommodation => {
        if (accommodation.id === id) {
            returnAccommodation = accommodation;
        }
    });

    if (returnAccommodation === undefined)
        throw new Response("", {status: 404})

    return returnAccommodation;
}

/**
 * Convert an array to a string with each element on a new line
 * @param {String[]} array - the array to convert
 * @returns {String} - the string
 */
function arrayToString(array) {
    return array.join("\n");
}

/**
 * Create the stars of the rating
 * @param {Number} rating - the rating of the accommodation
 */
function createStars(rating) {
    let redStarsAmount = parseInt(rating);
    const ratingDiv = document.querySelector(".rating");

    if (ratingDiv.childElementCount !== 0) return;

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("img");
        star.alt = "Etoile de notation";

        if (redStarsAmount > 0)
            star.src = Red;
        else
            star.src = Grey;

        ratingDiv.appendChild(star);
        redStarsAmount--;
    }
}

/**
 * Check if the window is in phone vue
 * @returns {boolean} - true if the window is in phone vue
 */
function isPhoneVue() {
    return window.innerWidth < 819;
}

export default Accommodations;