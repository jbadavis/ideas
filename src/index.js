import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const initialState = {ideas: []};

ReactDOM.render(
  <App initialState={initialState} />,
  document.getElementById('root'),
);
