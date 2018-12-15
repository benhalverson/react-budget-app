import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import CreateExpensesPage from '../components/CreateExpensePage';
import EditExpensesPage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import '../App.css';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/dashboard" component={ExpenseDashboardPage}/>
      <Route path="/create" component={CreateExpensesPage}/>
      <Route path="/edit/:id" component={EditExpensesPage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;