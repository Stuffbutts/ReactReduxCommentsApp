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
  comments: [
    {
      id: 0,
      text: "First!",
      dateTimeIndex: Date.now()
    }
  ]
};

function comments(state = initialState.comments, action){
  switch(action.type){
    case ADD_COMMENT:
      return [
        ...state,
        {
          id: state.length > 0 ? state[state.length - 1].id + 1 : 0,
          text: action.text,
          dateTimeIndex: action.dateTimeIndex
        }
      ]
    case REMOVE_COMMENT:
      if (typeof state === undefined){
        return state
      }
      return [
        ...state.slice(0,action.index)
      ]      
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
