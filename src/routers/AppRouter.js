import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import CreateExpensesPage from '../components/CreateExpensePage';
import EditExpensesPage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={CreateExpensesPage} />
        <PrivateRoute path="/edit/:id" component={EditExpensesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
