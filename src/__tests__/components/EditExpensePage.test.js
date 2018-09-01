import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensesPage } from '../../components/EditExpensePage';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }
]; 
let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensesPage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[0]}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[0].id
  });
});
