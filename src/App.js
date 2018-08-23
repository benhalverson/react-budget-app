import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import './App.css';

const ExpenseDashboardPage = () => (
  <div>
    This is the dashboard page
  </div>
);

const CreateExpensesPage = () => (
  <div>
    This is the create expenses page
  </div>
);

const EditExpensesPage = () => (
  <div>
    This is the edit expenses page
  </div>
);

const HelpPage = () => (
  <div>
    This is the help component.
  </div>
);

class App extends Component {

  render() {
    return (
      
        <BrowserRouter>
        <div>
          <Route path="/" component={ExpenseDashboardPage} exact={true}/>
          <Route path="/create" component={CreateExpensesPage}/>
          <Route path="/edit" component={EditExpensesPage}/>
          <Route path="/help" component={HelpPage}/>
          </div>
        </BrowserRouter>
      
    );
  }
}

export default App;
