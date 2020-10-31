import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../actions/filters';

export function ExpenseListFilters({
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount,
  filters,
}) {
  const [calendarFocused, setCalendarFocused] = useState(false);

  function onDatesChange({ startDate, endDate }) {
    setStartDate(startDate);
    setEndDate(endDate);
  }

  function onFocusChange(calendarFocused) {
    setCalendarFocused(calendarFocused);
  }

  function onTextChange(e) {
    setTextFilter(e.target.value);
  }

  function onSortChange(e) {
    if (e.target.value === 'date') {
      sortByDate();
    } else if (e.target.value === 'amount') {
      sortByAmount();
    }
  }

  return (
    <div>
      <input type='text' value={filters.text} onChange={onTextChange} />
      <select value={filters.sortBy} onChange={onSortChange}>
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
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

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
