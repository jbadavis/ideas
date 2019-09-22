import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('App', () => {
  const initialStateMock = {
    ideas: [
      {
        title: 'title one',
        description: 'description one',
      },
      {
        title: 'title one',
        description: 'description one',
      },
    ],
  };

  it('should match snapshot', () => {
    expect(shallow(<App initialState={initialStateMock} />)).toMatchSnapshot();
  });
});
