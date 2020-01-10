import './stylesheets/tailwind.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import bookReducer from './reducers/books';

const bookStore = createStore(bookReducer);

ReactDOM.render(
  <Provider store={bookStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
