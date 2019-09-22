import React from 'react';
import AddIdea from './AddIdea';
import {mount, shallow} from 'enzyme';

describe('Idea', () => {
  const titleMock = 'title';
  const descriptionMock = 'description';
  const handleUpdateIdeaMock = jest.fn();

  const component = mount(
    <AddIdea
      title={titleMock}
      description={descriptionMock}
      handleUpdateIdea={handleUpdateIdeaMock}
    />,
  );

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('if the submit CTA is clicked', () => {
    it('should call handleEditIdea', () => {
      component.find('form').simulate('submit');

      expect(handleUpdateIdeaMock).toHaveBeenCalledWith(
        titleMock,
        descriptionMock,
      );
    });
  });
});
