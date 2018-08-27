import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './App.css';
import 'react-dates/lib/css/_datepicker.css';
const store = configureStore();
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