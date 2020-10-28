import React, { useReducer } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

const formReducer = (state, action) => {
  switch(action.type) {
    case 'descriptionChange':
      return {
        ...state,
        description: action.payload,
      };
    case 'categoryChange':
      return {
        ...state,
        category: action.payload,
      };
    case 'noteChange':
      return {
        ...state,
        note: action.payload,
      };
    case 'amountChange':
      return {
        ...state,
        amount: action.payload,
      }
    case 'dateChange':
      return {
        ...state,
        createdAt: action.payload,
      };
    case 'calendarFocused':
      return {
        ...state,
        calendarFocused: action.payload,
      };
    case 'error':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

const ExpenseForm = ({ onSubmit, expense }) => {
  const [formState, dispatch] = useReducer(formReducer, {
    description: expense ? expense.description : '',
    category: expense ? expense.category : '',
    note: expense ? expense.note : '',
    amount: expense ? (expense.amount / 100).toString() : '',
    createdAt: expense ? moment(expense.createdAt) : moment(),
    calendarFocused: false,
    error: ''
  });

  const onDescriptionChange = ({ target }) =>
    dispatch({type: 'descriptionChange', payload: target.value });
  const onCategoryChange = ({ target }) =>
    dispatch({type: 'categoryChange', payload: target.value });
  const onNoteChange = ({ target }) =>
    dispatch({type: 'noteChange', payload: target.value });
  
  const onAmountChange = ({ target }) => {
    const amount = target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      dispatch({ type: 'amountChange', payload: target.value });
    }
  };
  const onDateChange = createdAt => {
    if (createdAt) {
      dispatch({ type: 'dateChange', payload: target.value });
    }
  };
  const onFocusChange = ({ focused }) =>
    dispatch({ type: 'calendarFocused', payload: focused });

  const submitForm = (e) => {
    e.preventDefault();

    if (!formState.description || !formState.amount) {
      dispatch({ type: 'error', payload: 'Please provide description, category, and amount.' });
    } else {
      dispatch({ type: 'error', payload: '' });
      onSubmit({
        description: formState.description,
        amount: parseFloat(formState.amount, 10) * 100,
        category: formState.category,
        createdAt: formState.createdAt.valueOf(),
        note: formState.note
      });
    }
  };

  return (
    <form className="form" onSubmit={submitForm}>
      {formState.error && <p className="form__error">{formState.error}</p>}
      <input
        type="text"
        placeholder="Description"
        autoFocus
        className="text-input"
        value={formState.description}
        onChange={onDescriptionChange}
      />
      <input
        type="text"
        placeholder="Category"
        autoFocus
        className="text-input"
        value={formState.category}
        onChange={onCategoryChange}
      />
      <input
        type="text"
        placeholder="Amount"
        className="text-input"
        value={formState.amount}
        onChange={onAmountChange}
      />
      <SingleDatePicker
        date={formState.createdAt}
        onDateChange={onDateChange}
        focused={formState.calendarFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
      <textarea
        placeholder="Add a note for your expense (optional)"
        className="textarea"
        value={formState.note}
        onChange={onNoteChange}
      />
      <div>
        <button className="button">Save Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
