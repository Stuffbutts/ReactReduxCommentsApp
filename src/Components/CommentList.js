import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => (
    <div className="row">
        {comments.map(comment => (
            <Comment key={comment.id} {...comment}/>
        ))}
    </div>
);

export default CommentList