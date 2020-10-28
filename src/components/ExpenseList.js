import React from 'react';
import { useSelector } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = () => {
  const expenses = useSelector(({ expenses, filters }) =>
    selectExpenses(expenses, filters)
  );

  return (
    <div>
      {expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseListItem key={expense.id} expense={expense} />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
