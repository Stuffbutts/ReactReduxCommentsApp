import fetch from 'isomorphic-fetch';

/**
 * Action types
 */

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const FETCH_STORY_REQUEST = 'FETCH_STORY_REQUEST';
export const FETCH_STORY_SUCCESS = 'FETCH_STORY_SUCCESS';
export const FETCH_STORY_FAILURE = 'FETCH_STORY_FAILURE';


export function addComment(text, dateTimeIndex) {
  let dateFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
    hour12: true
  };

  return {
    type: ADD_COMMENT,
    text,
    dateTimeIndex,
    dateTimeFormatted: new Date(dateTimeIndex).toLocaleString('en-US', dateFormatOptions)
  }
}

export function removeComment(id) {
  return {type: REMOVE_COMMENT, id}
}

export function requestStory(story) {
  return {type: FETCH_STORY_REQUEST, story}
}

export function receiveStory(story, text) {
  return {
    type: FETCH_STORY_SUCCESS,
    story,
    text: text
  }
}

export function receiveStoryFailure(story, text){
  return {
    type: FETCH_STORY_FAILURE,
    story,
    text
  }
}


export function fetchStory(story) {
  return dispatch => {
    dispatch(requestStory(story));
    return fetch(story)
      .then(response => {
        if (response.status >= 400){
          throw "Something went wrong on our end... so sorry :(";
        }
        return response.text()
      })
      .then(text => dispatch(receiveStory(story, text)))
      .catch(text => dispatch(receiveStoryFailure(story, text)))
  }
}





