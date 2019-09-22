import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('App', () => {
  const initialStateMock = {
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

  const component = shallow(<App initialState={initialStateMock} />);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('if the Add CTA is clicked', () => {
    it('should update state', () => {
      component.find('button').simulate('click');

      expect(component.state('ideas')).toEqual([
        ...initialStateMock.ideas,
        {
          title: '',
          description: '',
          time: '',
          editing: true,
        },
      ]);
    });
  });
});
