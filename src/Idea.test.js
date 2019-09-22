import React from 'react';
import Idea from './Idea';
import {shallow} from 'enzyme';

describe('Idea', () => {
  it('should match snapshot', () => {
    expect(
      shallow(<Idea title="title" description="description" />),
    ).toMatchSnapshot();
  });
});
