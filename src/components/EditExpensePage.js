import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export function EditExpensesPage({
  startEditExpense,
  startRemoveExpense,
  expense,
  history,
}) {
  function onSubmit(expense) {
    startEditExpense(expense.id, expense);
    history.push('/');
  }
  function onRemove() {
    startRemoveExpense({ id: expense.id });
    history.push('/');
  }

  return (
    <div>
      <ExpenseForm expense={expense} onSubmit={onSubmit} />
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

export default connect(mapStateToProps, {
  startEditExpense,
  startRemoveExpense,
})(EditExpensesPage);
