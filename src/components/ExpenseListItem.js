import React from 'react';
import { Link } from 'react-router-dom';
const ExpenseListItem = ({ description, id, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>{amount} - {createdAt}</p>

  </div>
);

export default ExpenseListItem;