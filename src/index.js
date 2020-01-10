import './stylesheets/tailwind.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import appReducer from './reducers/index';

const bookStore = createStore(appReducer);

ReactDOM.render(
  <Provider store={bookStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
