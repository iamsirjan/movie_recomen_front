import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import action from './redux/actions'
import './login.css';
const Login = () => {
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const [usernameError,setUsernameError] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault()

        const data = {
            username:username,
            password:password,
        }
        if (!username) {
            setUsernameError('*This field is required')
        } else setUsernameError('')
        if (!password) {
            setPasswordError('*This field is required')
        } else setPasswordError('')
      

        dispatch(action.login(data));
     

      };
    return (
        <div className="login_page">
        <div className="login_container">
            <div className="login_form">
            <Typography sx={{mb:3,fontSize:'26px',fontWeight:900}}> Log in to your account</Typography>
                <TextField
                fullWidth
                id="demo-helper-text-misaligned"
                label="Username"
                onChange={(e) =>setUsername(e.target.value)}
                        />
                          <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {usernameError} </Typography>
                <TextField sx={{mt:4}}
                fullWidth
              
              id="demo-helper-text-misaligned"
              label="Password"
              onChange={(e) =>setPassword(e.target.value)}

                      />
                        <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {passwordError} </Typography>
                      
            <div className="login_button">
               
                <button onClick={(e) => handleLogin(e)}>Login</button>
                
            </div>
            </div>
        </div>
        <div className="login_container_second">
            <div className="login_container_right">
            <Typography sx={{fontSize:'40px',color:'#fff',fontWeight:900}}>New Here?</Typography>
            <Typography sx={{fontSize:'20px',color:'#fff',fontWeight:100}}>Register your account here </Typography>

            <div className="login_button_second">
                <Link to="/register">
                <button >Sign up</button>
                </Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Login;