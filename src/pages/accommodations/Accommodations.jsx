import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import accommodations from "../../accommodations.json";
import Header from "../../components/header/Header";
import Tag from "../../components/tag/Tag";
import Collapse from "../../components/collapse/Collapse";
import Slideshow from "../../components/Slideshow";
import "./accommodations.css";
import Red from "../../assets/red_star.png";
import Grey from "../../assets/grey_star.png";


const Accommodations = () => {
    const {id} = useParams();
    const accommodation = getAccommodation(id);

    if (accommodation === undefined) {
        throw new Response("", {status: 404})
    } else
        useEffect(() => {
            colorStars(accommodation.rating);
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
                                {accommodation.tags.map(tag => {
                                    return (<Tag key={tag} tag={tag}/>);
                                })}
                            </div>
                        </div>
                        <div className="owner">
                            <div className="host">
                                <p>{accommodation.host.name}</p>
                                <img src={accommodation.host.picture} alt={accommodation.host.name}/>
                            </div>
                            <div className="rating">
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <Collapse name="Description" content={accommodation.description} minHeightContent={"250px"}/>
                        <Collapse name="Équipements" content={arrayToString(accommodation.equipments)} minHeightContent={"250px"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

function getAccommodation(id) {
    let returnAccommodation;
    accommodations.forEach(accommodation => {
        if (accommodation.id === id) {
            returnAccommodation = accommodation;
        }
    });
    return returnAccommodation;
}

function arrayToString(array) {
    return array.join("\n");
}

function colorStars(rating) {
    let redStarsAmount = parseInt(rating);
    const ratingDiv = document.querySelector(".rating");

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("img");

        if (redStarsAmount > 0)
            star.src = Red;
        else
            star.src = Grey;

        ratingDiv.appendChild(star);
        redStarsAmount--;
    }
}

export default Accommodations;