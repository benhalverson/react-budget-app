import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ExpenseDashboardPage from '../ExpenseDashboardPage';
import CreateExpensesPage from '../CreateExpensePage';
import EditExpensesPage from '../EditExpensePage';
import HelpPage from '../HelpPage';
import Header from '../Header';
import NotFoundPage from '../NotFoundPage';
import '../../App.css';

const AppRouter = () => (
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
)
export default AppRouter;