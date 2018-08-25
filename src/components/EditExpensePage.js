import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
const EditExpensesPage = props => {
  console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          //dispatch
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
          //redirect back to dashboard
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensesPage);
