import React from 'react';

const commentStyles = {
    borderBottom: "2px solid black",
    background: "rgba(225,225,225,0.75)",
    minHeight: "50px"
};

const Comment = ({ text, time }) => (
    <div className="row" style={commentStyles}>
        <p>
            {text}
        </p>
        <small>{new Date(time).toLocaleDateString()}</small>
    </div>
);

export default Comment