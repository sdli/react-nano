import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import { createStore, applyMiddleware,compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from "./src/reducers";

import LoginApp from "./src/containers/App.js";
import { match, Router, hashHistory } from 'react-router';
import getRoutes from './src/routes';

const initialState = {};

const store = createStore(reducers,initialState,
    compose(
      applyMiddleware(thunk),
));
const rootElement = document.getElementById('root');
const history = hashHistory;
const routes = getRoutes(store)

match({ history, routes }, (err, redirect, renderProps) => {
  if (redirect) {
    history.replace(redirect);
  } else if (err) {
    history.goBack();
    console.error(err.stack);
  } else {
    render(
      <Provider store={store}>
        <Router {...renderProps} />
      </Provider>,
      rootElement
    );
  }
});
