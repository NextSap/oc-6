import React from 'react';
import {useNavigate} from "react-router-dom";
import "./card.css";

const Card = (props) => {
    const style = {
        backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('" + props.cover + "')"
    };
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate("/accommodations/" + props.id)} className="card" style={style}>
            <p>{props.title}</p>
        </div>
    );
};

export default Card;