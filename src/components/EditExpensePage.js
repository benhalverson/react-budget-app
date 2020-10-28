import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensesPage = ({ history, match }) => {
  const expense = useSelector(({ expenses }) => expenses.find((expense) => expense.id === match.params.id));
  const dispatch = useDispatch();

  const onSubmit = (expenseFormData) => {
    dispatch(startEditExpense(expense.id, expenseFormData));
    history.push('/');
  };
  const onRemove = () => {
    dispatch(startRemoveExpense({ id: expense.id }));
    history.push('/');
  };

  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={onSubmit}
      />
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default EditExpensesPage
