import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
const ExpenseListItem = ({ dispatch, description, id, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }));
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);