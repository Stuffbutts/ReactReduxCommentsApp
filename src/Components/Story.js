import React from 'react';

const storyStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    minHeight: "400px",
    maxWidth: "70em"
};

const Story = ({ text }) => (
  <div style={storyStyle}>
      <h2>A story for you!</h2>
      <span dangerouslySetInnerHTML={{__html: text}} />
  </div>
);

export default Story