import React from 'react';
import { useDispatch } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const CreateExpensePage = ({ history }) => {
  const dispatch = useDispatch();

  const onSubmit = expense => {
    dispatch(startAddExpense(expense))
    history.push('/');
  };

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
} 

export default CreateExpensePage;
