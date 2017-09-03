import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'

import * as Actions from './Actions'


/************************
 * Test action creators
 ***********************/

/**
 * Sync actions
 */
describe('Actions', () => {
  it('should create an action to add a comment', () => {
    const text = 'Testing comment';
    const dateTimeIndex = Date.now();
    const formattingOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'America/New_York',
      hour12: true
    };
    const fDate = new Date(dateTimeIndex)
      .toLocaleString('en-US',formattingOptions);

    const expectedAction = {
      type: Actions.ADD_COMMENT,
      text,
      dateTimeIndex,
      dateTimeFormatted: fDate
    };

    expect(Actions.addComment(text,dateTimeIndex)).toEqual(expectedAction)
  });
  it('should create an action to remove a comment', () => {
    const id = 0;
    const expectionAction = {
      type: Actions.REMOVE_COMMENT,
      id
    };

    expect(Actions.removeComment(id)).toEqual(expectionAction);
  })
});

/**
 * Async actions
 */

// thunk middleware
const middlewares = [thunk];

// Mock redux
const mockStore = configureMockStore(middlewares);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll()
  });
  const source = "https://example.com/api/text";
  let root = source.slice(0,source.indexOf('/',9)+1);
  let route = source.slice(source.indexOf('/',9),source.length);

  it('creates FETCH_STORY_SUCCESS when story fetching is done', () => {

    nock(root)
      .get(route)
      .reply(200, "Lorem ipsum");

    const store = mockStore({ text: "" });

    const expectedActions = [
      { type: Actions.FETCH_STORY_REQUEST, story: source },
      { type: Actions.FETCH_STORY_SUCCESS, story: source, text: "Lorem ipsum" }
    ];

    return store.dispatch(Actions.fetchStory(source)).then(() => {
      // return of async action
      expect(store.getActions()).toEqual(expectedActions)
    });
  });

  it('creates FETCH_STORY_FAILURE when story fetching fails', () => {

    nock(root)
      .get(route)
      .reply(500);

    const store = mockStore({ text: "" });

    const expectedActions = [
      { type: Actions.FETCH_STORY_REQUEST, story: source },
      { type: Actions.FETCH_STORY_FAILURE, story: source, text: "Something went wrong on our end... so sorry :("}
    ];

    return store.dispatch(Actions.fetchStory(source)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});