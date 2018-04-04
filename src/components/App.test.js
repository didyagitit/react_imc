import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import App from './App';
import ImcForm from './ImcForm';

describe('<App />', () => {
  it('has one instance of ImcForm', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(ImcForm)).toHaveLength(1);
  });
  
  it('has a h3 header with app title', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find('h3');
    
    expect(header).toHaveLength(1);
    expect(header.text()).toEqual('IMC Calculator');
  });
});
