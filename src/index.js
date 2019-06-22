import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { firebase } from './firebase/firebase';
import './index.css';
import App from './App';
import { startSetExpenses } from './actions/expenses';
import configureStore from './store/configureStore';
const store = configureStore();
ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
});

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test'});
} else if(process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '.env.development'});
<<<<<<< HEAD
} else if(process.env.NODE_ENV === 'production') {
  dotenv.config({path: '.env.production.local'})
}
=======
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
  }
});
>>>>>>> 8f1e6db18f79c6a0324d03d6b456b4287d930b58
