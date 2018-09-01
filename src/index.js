import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test'});
} else if(process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development'});
}