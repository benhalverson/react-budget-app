import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export function CreateExpensePage({ startAddExpense, history }) {
  function onSubmit(expense) {
    startAddExpense(expense);
    history.push('/');
  }

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(CreateExpensePage);
