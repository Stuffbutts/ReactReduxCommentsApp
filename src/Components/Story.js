import React from 'react';

const storyStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    minHeight: "400px"
};

const Story = ({ text }) => (
  <p style={storyStyle}>{text}</p>
);

export default Story