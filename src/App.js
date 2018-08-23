import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './App.css';
const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill'}));
store.dispatch(addExpense({ description: 'Gas bill'}));
store.dispatch(setTextFilter('water'));

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