import React from 'react';
import {format} from 'date-fns';
import Idea from './Idea';
import {shallow} from 'enzyme';

jest.mock('date-fns');

describe('Idea', () => {
  const handleUpdateIdea = jest.fn();
  const handleDeleteIdea = jest.fn();
  const handleEditIdea = jest.fn();
  const timeMock = "2000-09-24T20:40:51.117Z";

  describe('if editing is truthy', () => {
    it('should match snapshot', () => {
      expect(
        shallow(
          <Idea
            title="title"
            description="description"
            time={timeMock}
            editing={true}
            handleUpdateIdea={handleUpdateIdea}
            handleDeleteIdea={handleDeleteIdea}
            handleEditIdea={handleEditIdea}
          />,
        ),
      ).toMatchSnapshot();
    });
  });

  describe('if editing is falsy', () => {
    const component = shallow(
      <Idea
        title="title"
        description="description"
        time={timeMock}
        editing={false}
        handleUpdateIdea={handleUpdateIdea}
        handleDeleteIdea={handleDeleteIdea}
        handleEditIdea={handleEditIdea}
      />,
    );

    it('should update state', () => {
      expect(component).toMatchSnapshot();
    });

    it('should call date-fns format correctly', () => {
      expect(format).toHaveBeenCalledWith(new Date(timeMock), 'hh:mm aaa d/M/yy');
    });

    describe('if the edit CTA is clicked', () => {
      it('should call handleEditIdea', () => {
        component.find('.edit').simulate('click');

        expect(handleEditIdea).toHaveBeenCalled();
      });
    });

    describe('if the delete CTA is clicked', () => {
      it('should call handleDeleteIdea', () => {
        component.find('.delete').simulate('click');

        expect(handleDeleteIdea).toHaveBeenCalled();
      });
    });
  });
});
