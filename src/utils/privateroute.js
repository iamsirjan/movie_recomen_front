import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({
  component: Component,
  path,
  exact,
  title,
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
        isAdmin ? (
         
           
              <Component {...props} {...rest} />
   
          
        ) : (
          <Redirect
            to={{ pathname: '/', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
