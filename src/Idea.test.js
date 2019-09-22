import React from 'react';
import Idea from './Idea';
import {shallow} from 'enzyme';

describe('Idea', () => {
  const handleUpdateIdea = jest.fn();
  const handleDeleteIdea = jest.fn();
  const handleEditIdea = jest.fn();

  describe('if editing is truthy', () => {
    it('should match snapshot', () => {
      expect(
        shallow(
          <Idea
            title="title"
            description="description"
            time="time"
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
        time="time"
        editing={false}
        handleUpdateIdea={handleUpdateIdea}
        handleDeleteIdea={handleDeleteIdea}
        handleEditIdea={handleEditIdea}
      />,
    );

    it('should update state', () => {
      expect(component).toMatchSnapshot();
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
