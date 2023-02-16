import React, {useState} from 'react';
import "./collapse.css";
import Arrow from "../../assets/arrow.png";

const Collapse = ({name, content}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="collapse">
            <button onClick={() => {
                setOpen(!open)
            }} className="collapse-button"><span>{name}<img style={{transform: open ? null : "rotate(-180deg)"}}
                                                            alt="Flèche" src={Arrow}/></span></button>
            <div style={{display: open ? "block" : null}} className="content">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Collapse;