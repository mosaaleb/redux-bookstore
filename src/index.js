import './stylesheets/tailwind.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './configureStore';

const bookStore = configureStore();

ReactDOM.render(
  <Provider store={bookStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
