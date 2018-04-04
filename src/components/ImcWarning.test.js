import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import ImcWarning from './ImcWarning';

describe('<ImcWarning />', () => {
  describe('when warning prop is true', () => {
    it('renders a warning alert', () => {
      const wrapper = shallow(<ImcWarning warning={true} />);
      const messageDiv = wrapper.find('.alert');

      expect(messageDiv).toHaveLength(1);
    });
  });
  
  describe('when warning prop is false', () => {
    it('does not render warning alert', () => {
      const wrapper = shallow(<ImcWarning warning={false} />);
      const messageDiv = wrapper.find('.alert');

      expect(messageDiv).toHaveLength(0);
    });
  });
});
