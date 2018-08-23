import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './App.css';
const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({ description: 'Rent', amount: 200000}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 8600, createdAt: 1000}));


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;