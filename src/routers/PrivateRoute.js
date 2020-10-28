import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(({ auth }) => !!auth.uid);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
