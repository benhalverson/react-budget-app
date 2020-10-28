import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(({ auth }) => !!auth.uid);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
