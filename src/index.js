import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const initialState = {
  ideas: [
    {
      title: 'title one',
      description: 'description one',
      time: new Date(),
      editing: false,
    },
    {
      title: 'title two',
      description: 'description two',
      time: new Date(),
      editing: true,
    },
  ],
};

ReactDOM.render(
  <App initialState={initialState} />,
  document.getElementById('root'),
);
