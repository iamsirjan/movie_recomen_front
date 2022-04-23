import react  from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import authAction from '../login/redux/actions'
const Navbar = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.auth?.currentUser);
     
    const handleLogout = () => {
        dispatch(authAction.logout())
    }
    return (
        <div className="navbar_component">
             <div className="navbar_logo">
              <span>Veni</span>
          </div>
            <div className="navbar_menu_bar">
         
          <div className="navbar_menu">
              <Link to="/" className="link">
              <span>Home</span>
              </Link>
          </div>
          {currentUser ?
           <div className="navbar_user">
           
           <span className="login_user">{currentUser.user.username}</span>
           <img src={ `http://127.0.0.1:8000` + currentUser.user.image } alt="profile_image" />
           {currentUser.user.is_admin == true && 
             <Link to="/admin" className="link">
           <span className="login_user">Admin</span>
           </Link>
           }
           <span onClick={handleLogout} className="login_user">Logout</span>
         
           
       </div>
       :
          <div className="navbar_user">
              <Link className="link" to="/login">
              <span className="login_user">Login</span>
              </Link>
              <Link className="link" to="/register">
              <span className="register_user">Register</span>
              </Link>
          </div>
}
          </div>
        </div>
    )
}

export default Navbar;