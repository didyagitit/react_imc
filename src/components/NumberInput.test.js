import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import NumberInput from './NumberInput';

describe('<NumberInput />', () => {
  describe('with correct props', () => {
    it('renders an input of type number', () => {
      const wrapper = shallow(
        <NumberInput
          name="weight"
          label="Weight(kg)"
          placeholder={0}
          onChange={() => {}}/>
      );
      const numberInput = wrapper.find('input');

      expect(numberInput.prop('type')).toEqual('number');
    });
  
    it('renders an input of type number with label', () => {
      const labelText = "Weight(kg)";
      const wrapper = shallow(
        <NumberInput
          name="weight"
          label={labelText}
          placeholder={0}
          onChange={() => {}}/>
      );
      const inputLabel = wrapper.find('label');

      expect(inputLabel).toHaveLength(1);
      expect(inputLabel.text()).toEqual(labelText);
    });
  });
});
