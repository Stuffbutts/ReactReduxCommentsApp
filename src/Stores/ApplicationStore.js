import expect from 'expect';
import deepFreeze from 'deep-freeze';

const Store = () => {}



/* Functions */
const addComment = (list) => {
  return [...list,"This is a comment"]

};

const removeComment = (list, index) => {

}


/* Tests */

const testAddComment = () => {
  const listBefore = [];
  const listAfter = [
    "This is a comment"
    // "Oh shit.. here is another",
    // "Damn right there is a third"
  ];

  deepFreeze(listBefore);

  expect(
    addComment(listBefore)
  ).toEqual(listAfter);
};

testAddComment();
console.log('All tests passed.');