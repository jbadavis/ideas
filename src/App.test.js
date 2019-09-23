import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import sortIdeasAlphabetically from './utils/sortIdeasAlphabetically';
import sortIdeasByDate from './utils/sortIdeasByDate';

jest.mock('./utils/sortIdeasAlphabetically');
jest.mock('./utils/sortIdeasByDate');

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

  let component;

  beforeEach(() => {
    sortIdeasAlphabetically.mockReturnValueOnce(initialStateMock.ideas);
    sortIdeasByDate.mockReturnValueOnce(initialStateMock.ideas);

    component = shallow(<App initialState={initialStateMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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

  describe('if the date alphabetically option is selected', () => {
    it('should call sortIdeasAlphabetically', () => {
      component
        .find('select')
        .simulate('change', {target: {value: 'alphabetically'}});

      expect(sortIdeasAlphabetically).toHaveBeenCalledWith(
        initialStateMock.ideas,
      );
    });
  });

  describe('if the date sort option is selected', () => {
    it('should call sortIdeasByDate', () => {
      component.find('select').simulate('change', {target: {value: 'date'}});

      expect(sortIdeasByDate).toHaveBeenCalledWith(initialStateMock.ideas);
    });
  });
});
