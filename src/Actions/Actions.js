import fetch from 'isomorphic-fetch';

/**
 * Action types
 */

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const REQUEST_STORY = 'REQUEST_STORY';
export const RECEIVE_STORY = 'RECEIVE_STORY';


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
    return {type: REQUEST_STORY, story}
}

export function receiveStory(story, text) {
    const time = Date.now();

    return {
        type: RECEIVE_STORY,
        source: story,
        text: text,
        dateTimeIndex: time,
        dateTimeFormatted: new Date(time).toLocaleDateString()
    }
}


export function fetchStory(story) {
    return dispatch => {
        dispatch(requestStory(story));
        return fetch(story)
            .then(response => response.text())
            .then(text => dispatch(receiveStory(story, text)))
    }
}





