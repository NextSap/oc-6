import React from 'react';
import {useParams} from "react-router-dom";
import accommodations from "../../accommodations.json";


const Accommodations = () => {
    const {id} = useParams();
    const accommodation = getAccommodation(id);

    if (accommodation === undefined) {
        throw new Response("", {status: 404})
    } else
        return (
            <div>

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

export default Accommodations;