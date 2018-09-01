import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { startSetExpenses } from './actions/expenses';
import configureStore from './store/configureStore';
const store = configureStore();
ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
})

registerServiceWorker();

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test'});
} else if(process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development'});
}