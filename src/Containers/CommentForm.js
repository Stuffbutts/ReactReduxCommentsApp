import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../Actions/Actions';

const textAreaStyle = {
    minHeight: "100px",
    maxWidth: "100%",
    marginTop: "1rem"
};

let CommentForm = ({ dispatch }) => {
    let textarea;

    return (
        <div>
            <form onSubmit={ e => {
                    e.preventDefault();
                    // check if empty or spaces
                    if(!textarea.value.trim()){
                        return;
                    }
                    dispatch(addComment(textarea.value, Date.now()));
                    textarea.value = '';
                }}
            >
                <textarea style={textAreaStyle} id="input--comment__text" ref={node => {
                        textarea = node
                    }}
                >

                </textarea>
                <button type="submit" className="button">Add Comment</button>
            </form>
        </div>
    )
};

CommentForm = connect()(CommentForm);

export default CommentForm