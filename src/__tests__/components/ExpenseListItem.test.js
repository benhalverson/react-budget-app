import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';

  test('should render ExpenseListItem with expense data', () => {
    const expense = [
      {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
      }];
    const wrapper = shallow(<ExpenseListItem {...expense[0]}/>)
    expect(wrapper).toMatchSnapshot();
  });