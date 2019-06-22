import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedExpensesSummary, { ExpensesSummary } from '../../components/ExpensesSummary';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];

test('should correctly render expenses summary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={1234345553}/>)
  expect(wrapper).toMatchSnapshot();
});

test('should render Expenses summary with props from redux', () => {
  const mockStore = configureStore();
  const store = mockStore({ expenses, filters: { text: '' } });
  const wrapper = shallow(<ConnectedExpensesSummary store={store} />);
  expect(wrapper.props().expenseCount).toEqual(3)
});