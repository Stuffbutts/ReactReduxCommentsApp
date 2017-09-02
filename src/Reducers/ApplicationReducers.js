import { combineReducers } from 'redux'
import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  REQUEST_STORY,
  RECEIVE_STORY
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
      if (typeof state === undefined){
        return state
      }
      return state.filter((comment,index) => index !== action.index);
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
    case REQUEST_STORY:
      return Object.assign({}, state, {
        isFetching: true,
        source: action.source
      });
    case RECEIVE_STORY:
      return Object.assign({}, state, {
        isFetching: false,
        text: action.text,
        dateTimeIndex: action.dateTimeIndex
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
