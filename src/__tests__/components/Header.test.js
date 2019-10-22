import React from 'react';
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

xtest('should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});


xtest('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
})
