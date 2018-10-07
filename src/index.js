import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { startSetExpenses } from './actions/expenses';
import configureStore from './store/configureStore';
const store = configureStore();
ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
})

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test'});
} else if(process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '.env.development'});
} else if(process.env.NODE_ENV === 'production') {
  dotenv.config({path: '.env.production.local'})
}