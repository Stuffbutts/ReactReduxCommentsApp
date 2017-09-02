import React from 'react'
import CommentForm from '../Containers/CommentForm'
import CommentList from '../Containers/CommentListContainer'


const CommentFrameStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "40rem"
};

const CommentFrame = () => (
    <div style={CommentFrameStyle}>
        <CommentList/>
        <CommentForm/>
    </div>
);

export default CommentFrame