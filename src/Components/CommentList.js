import React from 'react'
import Comment from './Comment'

const CommentList = ({comments, onClickHandler}) => (
    <div className="row">
        {comments.map(comment => (
            <Comment key={comment.id} {...comment} onClick={() => onClickHandler(comment.id)} />
        ))}
    </div>
);

export default CommentList