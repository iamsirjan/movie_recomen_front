import './App.css'
import Home from './component/Home'
import { Routes, Route, Link,Switch } from "react-router-dom";
import Login from './component/login';
import Register from './component/register';
import Details from './component/details';
import ProtectedRoute from './utils/protectedroute';
import { Fragment,Suspense ,useEffect,useRef, useState} from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { homeroutes } from './route/homeroute';
import { adminroutes } from './route/adminroute';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loggedinroutes } from './route/loggedinroute';
import movieActions from './component/admin/redux/actions'
import PrivateRoute from './utils/privateroute';
import HomepageRoute from './utils/Homepageroute';
import authActions from './component/login/redux/actions'
import LoggedInRoutes from './utils/loggedinroute';

function App() {
  const dispatch = useDispatch();
  
  const currentUser = useSelector((state) => state.auth?.currentUser);
    
  
const checkToken = useRef();
function isAuthenticated() {
  if (
    localStorage.getItem('access_token') &&
    localStorage.getItem('refresh_token')
  ) {
    return true;
  } else return false;
}

  function isAdmin() {

    if (currentUser?.user.is_admin == true) {
      return true;
    } else return false;
  }
  checkToken.current = () => {
    if (localStorage.getItem('access_token')) {
      return dispatch(authActions.getCurrentUser());
    }
    return false;
  };
 
  useEffect(() => {
    checkToken.current();
  
  }, [])
  return (
    <div className="App">
        <Suspense fallback={<div>Loading... </div>}>
           <Fragment>
           <ToastContainer />
<Switch>
    
    <ProtectedRoute
     
      isAuthenticated={isAuthenticated()}
     
      title="Login"
      path={'/login'}
      
      component={Login}
    />
    <ProtectedRoute
      isAuthenticated={isAuthenticated()}
      
      path={'/register'}
      component={Register}
    />

    {adminroutes.map(({ path, Component, title }) => (
            <PrivateRoute
              key={`title-${path}`}
              title={title}
              path={path}
             
              component={Component}
              
              isAdmin={isAdmin()}
            />
          ))}
           {loggedinroutes.map(({ path, Component, title }) => (
            <LoggedInRoutes
              key={`title-${path}`}
              title={title}
              path={path}
             
              component={Component}
              
              isAuthenticated={isAuthenticated()}
            />
          ))}
{homeroutes.map(({ path, Component, title }) => (
          
          <HomepageRoute title={title} path={path} component={Component} />
        
        ))}
  </Switch>
</Fragment>
</Suspense>
      
    </div>
  );
}

export default App;
