import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
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

const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Budget app!</h1>
    <nav>
      <ul>
        <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
        <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
        <li><NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink></li>
        <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
      </ul>
    </nav>
  </header>
)



class App extends Component {

  render() {
    return (
      
        <BrowserRouter>
        <div>
          <Header />
          <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true}/>
          <Route path="/create" component={CreateExpensesPage}/>
          <Route path="/edit" component={EditExpensesPage}/>
          <Route path="/help" component={HelpPage}/>
          <Route component={NotFoundPage}/>
          </Switch>
        </div>
        
        </BrowserRouter>
      
    );
  }
}

export default App;