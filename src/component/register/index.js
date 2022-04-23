import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import actions from "./redux/actions";
// import './login.css';
const Register = () => {
    const dispatch = useDispatch()
    const [firstname,setFirstName] = useState()
    const [lastname,setLastName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [repassword,setRePassword] = useState()

    const [username,setUsername] = useState()
    const [firstnameError,setFirstnameError] = useState('')
    const [lastnameError,setLastnameError] = useState('')
    const [emailError,setemailError] = useState('')
    const [usernameError,setUsernameError] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const [repasswordError,setRePasswordError] = useState('')


    const handleSubmit = (e) => {
            e.preventDefault()
             if (!firstname) {
                 setFirstnameError('*This field is required')
             } else setFirstnameError('')
             if(!lastname) {
                 setLastnameError('*This field is required')
             } else setLastnameError('')
            if (!email) {
                setemailError('*This field is required') 
            } else setemailError('')
             if (!username) {
            setUsernameError('*This field is required')
            } else setUsernameError('')
            if (!password) {
            setPasswordError('*This field is required')

            } else setPasswordError('')
            if (!repassword) {
                setRePasswordError('*This field is required')
    
                } else setRePasswordError('')

            const data = {
                firstname,
                lastname,
                email,
                password,
                username,
                re_password:repassword
            }
            dispatch(actions.adddetails(data))
    }

    return (

            
        <div className="login_page">
        <div className="login_container">
            <div className="login_form">
            <Typography sx={{mb:3,fontSize:'26px',fontWeight:900}}> Register your account</Typography>
                <TextField
                fullWidth
                id="demo-helper-text-misaligned"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                        />
                      <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {firstnameError} </Typography>
                <TextField sx={{mt:1}}
                fullWidth
                id="demo-helper-text-misaligned"
                label="Second Name"
                onChange={(e) => setLastName(e.target.value)}

                        />
                      <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {lastnameError} </Typography>

                <TextField sx={{mt:1}}
                fullWidth
                id="demo-helper-text-misaligned"
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}

                        />
                      <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {emailError} </Typography>

                  <TextField  sx={{mt:1}}
                fullWidth 
                id="demo-helper-text-misaligned"
                label="Username"
                onChange={(e) => setUsername(e.target.value)}

                        />

                      <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {usernameError} </Typography>

                <TextField sx={{mt:1}}

                fullWidth
                id="demo-helper-text-misaligned"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}

                        />
                
                <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {passwordError} </Typography>
                <TextField sx={{mt:1}}

fullWidth
id="demo-helper-text-misaligned"
label=" Confirm Password"
onChange={(e) => setRePassword(e.target.value)}

        />

<Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {repasswordError} </Typography>
            <div className="login_button">
                <button onClick={(e) => handleSubmit(e)} >Register </button>
            </div>
            </div>
        </div>
        <div className="login_container_second">
            <div className="login_container_right">
            <Typography sx={{fontSize:'40px',color:'#fff',fontWeight:900}}> Already Registered?</Typography>
            <Typography sx={{fontSize:'20px',color:'#fff',fontWeight:100}}>Login to your account from here </Typography>


            <div className="login_button_second">
                <Link to="/login">
                <button >Sign in</button>
                </Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Register;