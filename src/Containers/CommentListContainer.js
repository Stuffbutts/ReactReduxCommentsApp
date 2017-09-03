import { connect } from 'react-redux'
import CommentList from '../Components/CommentList'
import {removeComment} from '../Actions/Actions';

const getComments = (comments) => (
    comments
);

const mapStateToProps = state => {
    return {
        comments: getComments(state.comments)
    }
};

const mapDispatchToProps = dispatch => {
  return {
      onClickHandler: id => {
          dispatch(removeComment(id))
      }
  }
};

const CommentListContainer = connect(mapStateToProps,mapDispatchToProps)(CommentList);

export default CommentListContainer