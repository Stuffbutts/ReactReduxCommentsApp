import { combineReducers } from 'redux'
import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  FETCH_STORY_REQUEST,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_FAILURE
} from '../Actions/Actions'


const initialState = {
  story: {
      dateTimeIndex: 0,
      isFetching: false,
      text: "",
      source: ""
    }
  ,
  comments: []
};

function comments(state = initialState.comments, action){
  switch(action.type){
    case ADD_COMMENT:
      return [
        ...state,
        {
          id: state.reduce((maxId, comment)=>Math.max(comment.id, maxId), -1) + 1,
          text: action.text,
          dateTimeIndex: action.dateTimeIndex,
          dateTimeFormatted: action.dateTimeFormatted
        }
      ];
    case REMOVE_COMMENT:
      if (typeof state !== undefined){
        let cfm = window.confirm("You are about to delete a post... Are you sure?");
        if(cfm)
          return state.filter((comment,index) => index !== action.id);
      }
      return state;
    default:
      return state
  }
}

function story(
  state = {
    isFetching: false,
    text: '',
    source: ''
  },
  action
){
  switch (action.type){
    case FETCH_STORY_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        source: action.story
      });
    case FETCH_STORY_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        text: action.text,
        source: action.story
      });
    case FETCH_STORY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        text: "Something went wrong on our end... so sorry :(",
        source: action.story
      });
    default:
      return state
  }
}

// function commentApp(state = initialState, action){

//   return state;
// }

const commentAppReducer = combineReducers({
  comments,
  story
});

export default commentAppReducer
