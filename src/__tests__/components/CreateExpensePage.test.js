import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpensePage } from '../../components/CreateExpensePage';

test('should render CreateExpensePage correctly', () => {
  const onSubmit = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<CreateExpensePage onSubmit={onSubmit} history={history} />);
  expect(wrapper).toMatchSnapshot();
})