import React from 'react';
import { Route } from 'react-router';

const HomepageRoute = ({
  component: Component,
  path,
  exact,
  title,

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
      
      <Component {...props} {...rest} />}
    />
   
    
   
  );
};

export default HomepageRoute;
