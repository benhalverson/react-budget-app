import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

function useInput({ initialValue, name }) {
  const [value, setValue] = useState(initialValue);
  function onChange(e) {
    const updated = e.target.value;
    setValue(updated);
  }
  return [value, onChange];
}

export default function ExpenseForm({ expense, onSubmit }) {
  const [description, onDescriptionChange] = useInput(
    expense ? expense.description : ''
  );
  const [note, onNoteChange] = useInput(expense ? expense.note : '');
  const [category, onCategoryChange] = useInput(
    expense ? expense.category : ''
  );
  const [amount, setAmount] = useState(
    expense ? (expense.amount / 100).toString() : ''
  );
  const [createdAt, setCreatedAt] = useState(
    expense ? moment(expense.createdAt) : moment()
  );
  const [calendarFocused, setCalendarFocused] = useState(false);
  const [error, setError] = useState('');

  function onAmountChange(e) {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  }
  function onDateChange(createdAt) {
    if (createdAt) {
      setCreatedAt(createdAt);
    }
  }
  function onFocusChange({ focused }) {
    setCalendarFocused(focused);
  }
  function onFormSubmit(e) {
    e.preventDefault();

    if (!description || !amount) {
      setError('Please provide description, category, and amount.');
    } else {
      setError('');
      onSubmit({
        description,
        amount: parseFloat(amount) * 100,
        category,
        createdAt: createdAt.valueOf(),
        note,
      });
    }
    console.log(category);
  }

  return (
    <form className='form' onSubmit={onFormSubmit}>
      {error && <p className='form__error'>{error}</p>}
      <input
        type='text'
        placeholder='Description'
        autoFocus
        className='text-input'
        value={description}
        onChange={onDescriptionChange}
      />
      <input
        type='text'
        placeholder='Category'
        autoFocus
        className='text-input'
        value={category}
        onChange={onCategoryChange}
      />
      <input
        type='text'
        placeholder='Amount'
        className='text-input'
        value={amount}
        onChange={onAmountChange}
      />
      <SingleDatePicker
        date={createdAt}
        onDateChange={onDateChange}
        focused={calendarFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
      <textarea
        placeholder='Add a note for your expense (optional)'
        className='textarea'
        value={note}
        onChange={onNoteChange}
      />
      <div>
        <button className='button'>Save Expense</button>
      </div>
    </form>
  );
}
