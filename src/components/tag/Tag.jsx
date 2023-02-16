import React from 'react';
import "./tag.css";

const Tag = ({tag}) => {
    return (
        <div className="tag">
            <p>{tag}</p>
        </div>
    );
};

export default Tag;