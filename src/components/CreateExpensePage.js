import React from 'react'
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const CreateExpensesPage = (props) => (
  <div>
    <ExpenseForm onSubmit={(expense) => {
      props.dispatch(addExpense(expense))
      props.history.push('/');
    }}/>
  </div>
);

export default connect()(CreateExpensesPage)