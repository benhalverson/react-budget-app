import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters';

const ExpenseListFilters = () => {
  const filters = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();

  const [calendarFocused, setCalendarFocused] = useState(false);

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  const onFocusChange = calendarFocused => setCalendarFocused(calendarFocused);

  const onTextChange = ({ target }) => dispatch(setTextFilter(target.value));

  const onSortChange = ({ target }) => {
    if (target.value === 'date') {
      dispatch(sortByDate());
    } else if (target.value === 'amount') {
      dispatch(sortByAmount());
    }
  };

  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={onTextChange}
      />
      <select value={filters.sortBy} onChange={onSortChange}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
        startDate={filters.startDate}
        endDate={filters.endDate}
        onDatesChange={onDatesChange}
        focusedInput={calendarFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
        startDateId={'START_DATE'}
        endDateId={'END_DATE'}
      />
    </div>
  ); 
}

export default ExpenseListFilters;
