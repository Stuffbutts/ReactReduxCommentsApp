import { connect } from 'react-redux'
import CommentList from '../Components/CommentList'

const getComments = (comments) => (
    comments
);

const mapStateToProps = state => {
    return {
        comments: getComments(state.comments)
    }
};

const CommentListContainer = connect(mapStateToProps)(CommentList);

export default CommentListContainer