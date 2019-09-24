import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getStateFromLocalStorage from './utils/getStateFromLocalStorage'
import './index.css';

ReactDOM.render(
  <App initialState={getStateFromLocalStorage()} />,
  document.getElementById('root'),
);
