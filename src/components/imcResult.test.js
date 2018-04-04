import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import ImcResult from './ImcResult';
import { resultsDictionary } from './ResultsDictionary';

describe('<ImcResult />', () => {
  it('renders a message when result prop is > 0', () => {
    const wrapper = shallow(<ImcResult result={1} />);
    const messageDiv = wrapper.find('.alert');

    expect(messageDiv).toHaveLength(1);
  });
  
  it('renders a level 1 message when result is < 15', () => {
    const wrapper = shallow(<ImcResult result={1} />);
    const messageDiv = wrapper.find('.alert');

    expect(messageDiv.text()).toEqual(resultsDictionary['level1'].message);
  });
  
  it('renders a level 2 message when result is >= 15 and < 16', () => {
    const wrapper = shallow(<ImcResult result={15} />);
    const messageDiv = wrapper.find('.alert');

    expect(messageDiv.text()).toEqual(resultsDictionary['level2'].message);
  });
  
  it('renders a level 3 message when result is >= 16 and < 18.5', () => {
    const wrapper = shallow(<ImcResult result={16} />);
    const messageDiv = wrapper.find('.alert');

    expect(messageDiv.text()).toEqual(resultsDictionary['level3'].message);
  });
  
  it('renders a level 4 message when result is >= 18.5 and < 25', () => {
    const wrapper = shallow(<ImcResult result={18.5} />);
    const messageDiv = wrapper.find('.alert');

    expect(messageDiv.text()).toEqual(resultsDictionary['level4'].message);
  });
  
  it('renders a level 5 message when result is >= 25 and < 30', () => {
    const wrapper = shallow(<ImcResult result={25} />);
    const messageDiv = wrapper.find('.alert');

    expect(messageDiv.text()).toEqual(resultsDictionary['level5'].message);
  });
  
  it('renders a level 6 message when result is >= 30 and < 35', () => {
    const wrapper = shallow(<ImcResult result={30} />);
    const messageDiv = wrapper.find('.alert');

    expect(messageDiv.text()).toEqual(resultsDictionary['level6'].message);
  });
  
  it('renders a level 7 message when result is >= 35 and < 40', () => {
    const wrapper = shallow(<ImcResult result={35} />);
    const messageDiv = wrapper.find('.alert');

    expect(messageDiv.text()).toEqual(resultsDictionary['level7'].message);
  });
  
  it('renders a level 8 message when result is >= 40', () => {
    const wrapper = shallow(<ImcResult result={40} />);
    const messageDiv = wrapper.find('.alert');

    expect(messageDiv.text()).toEqual(resultsDictionary['level8'].message);
  });
});
