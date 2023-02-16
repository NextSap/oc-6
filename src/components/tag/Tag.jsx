import React from 'react';

const Tag = ({props}) => {
    return (
        <div className="tag">
            <p>{props.tag}</p>
        </div>
    );
};

export default Tag;