import React from 'react';
import { Redirect, Route } from 'react-router';


const ProtectedRoute = ({
  component: Component,
  exact,
  path,
  title,
  isAuthenticated,
  isAdmin,
  
  redirectTo,
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
          <Redirect to={{ pathname: redirectTo || '/' }} />
        
        ) : (
          <Component {...props} {...rest} />
        )
      }
    />
  );
};

export default ProtectedRoute;
