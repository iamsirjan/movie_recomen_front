import React from 'react';
import { Redirect, Route } from 'react-router';

const LoggedInRoutes = ({
  component: Component,
  path,
  exact,
  title,

  
  redirectTo,
  isAuthenticated,
  ...rest
}) => {
  if (title) {
    document.title = title;
  }
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        isAuthenticated ? (
         
           
              <Component {...props} {...rest} />
   
          
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default LoggedInRoutes;
