import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children,...rest}) => {
    const loggedInUser = false;
    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;