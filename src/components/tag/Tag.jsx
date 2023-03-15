import React from 'react';
import "./tag.css";

const Tag = (props) => {
    return (
        <div className="tag">
            <p>{props.children}</p>
        </div>
    );
};

export default Tag;