import fetch from 'isomorphic-fetch';
/**
 * Action types
 */

export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export const REQUEST_STORY = 'REQUEST_STORY'
export const RECEIVE_STORY = 'RECEIVE_STORY'


export function addComment(text, dateTimeIndex){
  return { type: ADD_COMMENT, text, dateTimeIndex }
}

export function removeComment(index){
  return { type: REMOVE_COMMENT, index}
}

export function requestStory (story) {
  return { type: REQUEST_STORY, story }
}

export function receiveStory (story, text) {
  return {
    type: RECEIVE_STORY,
    source: story,
    text: text,
    dateTimeIndex: Date.now()
  }
}


export function fetchStory(story){
  return dispatch => {
    dispatch(requestStory(story))
      return fetch(story)
          .then(response => response.text())
          .then(text => dispatch(receiveStory(story,text)))
  }
}





