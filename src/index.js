import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const initialState = {
  ideas: [
    {
      title: 'title one',
      description: 'description one',
      time: 'time one',
      editing: false,
    },
    {
      title: 'title two',
      description: 'description two',
      time: 'time two',
      editing: true,
    },
  ],
};

ReactDOM.render(
  <App initialState={initialState} />,
  document.getElementById('root'),
);
