import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import commentApp from './Reducers/ApplicationReducers'
import {
  addComment,
  removeComment
} from './Actions/Actions'

let store = createStore(commentApp)

console.log(store.getState());

let unsub = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addComment('A comment.', Date.now()))
store.dispatch(removeComment(1))
store.dispatch(removeComment(0))
store.dispatch(addComment('Another comment.', Date.now()))


unsub()

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
