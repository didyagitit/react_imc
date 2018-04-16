import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import ImcForm from './ImcForm';
import ImcResult from './ImcResult';
import NumberInput from './NumberInput';

describe('<ImcForm />', () => {
  it('has one instance of ImcForm', () => {
    const wrapper = shallow(<ImcForm />);

    expect(wrapper.find(ImcResult)).toHaveLength(1);
  });

  it('has two instances of NumberInput', () => {
    const wrapper = shallow(<ImcForm />);

    expect(wrapper.find(NumberInput)).toHaveLength(2);
  });

  it('has a submit button', () => {
    const wrapper = shallow(<ImcForm />);
    const submitButton = wrapper.find('#get-result');

    expect(submitButton).toHaveLength(1);
    expect(submitButton.text()).toEqual('Calculate IMC');
  });

  it('has null as a default value for result state', () => {
    const wrapper = mount(<ImcForm />);

    expect(wrapper.state().result).toBeNull();
  });

  describe('user interactions', () => {
    describe('when submit button is pressed with correct inputs', () => {
      it('changes result state', () => {
        const wrapper = mount(<ImcForm />);
        wrapper.state().height = 10;
        wrapper.state().weight = 10;

        wrapper.find('#get-result').simulate('click');
        const currentResult = parseFloat(wrapper.state().result);

        expect(currentResult).toEqual(0.10);
      });

      it('shows a result message', () => {
        const wrapper = mount(<ImcForm />);
        wrapper.state().height = 10;
        wrapper.state().weight = 10;

        wrapper.find('#get-result').simulate('click');
        const currentResult = parseFloat(wrapper.state().result);

        expect(currentResult).toEqual(0.10);
      });
    });

    describe('when submit button is pressed with incorrect inputs', () => {
      it('shows a warning without all inputs filled in', () => {
        const wrapper = mount(<ImcForm />);

        wrapper.find('#get-result').simulate('click');
        const warningMessage = wrapper.find('#warning-message');

        expect(warningMessage).toHaveLength(1);
      });
    });
  });
});
