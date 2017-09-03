import * as Actions from './Actions'


/**
 * Test action creators
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
