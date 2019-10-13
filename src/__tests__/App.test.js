import React from 'react';
import { shallow } from 'enzyme';
import {Jsx} from "../index";
import AppRouter from '../routers/AppRouter';

test('renders <App /> correctly', () => {
  //Cant be extracted to check only the Jsx Element.
  const wrapper = shallow(<Jsx />);
  expect(wrapper.find(AppRouter)).toBeDefined;
});
