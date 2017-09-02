import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'




import App from './Components/App';
import commentApp from './Reducers/ApplicationReducers'
import {
  addComment,
  removeComment,
  fetchStory
} from './Actions/Actions'

const loggerMiddleware = createLogger();


let store = createStore(
    commentApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

console.log(store.getState());

let unsub = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addComment('A comment.', Date.now()));
// store.dispatch(removeComment(1));
// store.dispatch(removeComment(0));
setTimeout(() => store.dispatch(addComment('DIDN\'T SEE ME COMING DID YA.', Date.now())),15000);


// store.dispatch(removeComment(0));

store.dispatch(fetchStory("https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html"))
    .then(() => console.log(store.getState()));


unsub();

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
