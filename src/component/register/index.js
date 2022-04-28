import { TextField, Typography } from "@mui/material";
import { useState,useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
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
    const [image,setImage] = useState();

    const [username,setUsername] = useState()
    const [firstnameError,setFirstnameError] = useState('')
    const [lastnameError,setLastnameError] = useState('')
    const [emailError,setemailError] = useState('')
 const [emailTakenError,setEmailTakenError] = useState('')
 const [usernameTaken,setUsernameTakenError] = useState('')
    const [usernameError,setUsernameError] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const [passwordRegrexError,setPasswordRegrexError] = useState('')

    const [repasswordError,setRePasswordError] = useState('')

    const passwordRegrex =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const userList = useSelector((state) => state.register.user)
    const previewimage = (e) => {
        setImage(e.target.files[0])
    }
  

  useEffect(() => {
    dispatch(actions.getdetails())
  },[])
    const handleSubmit = (e) => {
            e.preventDefault()
             if (!firstname) {
                 setFirstnameError('*This field is required')
             } else setFirstnameError('')
             if (userList?.some((data) => data.email== email)) {
                 setEmailTakenError('* email is already taken')
             }else setEmailTakenError('')
            if (userList?.some((data) => data.username== username)) {
                    setUsernameTakenError('* username is already taken')
                }else setUsernameTakenError('')
             if(!lastname) {
                 setLastnameError('*This field is required')
             } else setLastnameError('')
            if (!email) {
                setemailError('*This field is required') 
            } else setemailError('')
             if (!username) {
            setUsernameError('*Username is already taken')
            } else setUsernameError('')
            if (password.match(passwordRegrex)) {
                setPasswordRegrexError('')
            } else setPasswordRegrexError('*password must be eight characters including one uppercase letter, one special character and alphanumeric characters')
            if (!password) {
            setPasswordError('*This field is required')

            } else setPasswordError('')
            if ( password != repassword) {
                setRePasswordError('*password and confirm password doesnt match')
    
                } else setRePasswordError('')

            const data = {
                firstname,
                lastname,
                email,
                password,
                username,
                re_password:repassword,
                image,
                
            }
            console.log(data)
            const formdata = new FormData();

         formdata.append("firstname", firstname);
         formdata.append("lastname",lastname)
         formdata.append("email",email)
        
         formdata.append("password",password)
         formdata.append("re_password",repassword)

         formdata.append("username",username)
         formdata.append("image",image)
         
            dispatch(actions.adddetails(formdata))
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
                      <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {emailTakenError} </Typography>


                  <TextField  sx={{mt:1}}
                fullWidth 
                id="demo-helper-text-misaligned"
                label="Username"
                onChange={(e) => setUsername(e.target.value)}

                        />

                      <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {usernameError} </Typography>
                      <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {usernameTaken} </Typography>


                <TextField sx={{mt:1}}

                fullWidth
                id="demo-helper-text-misaligned"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}

                        />
                
                
                <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {passwordError} </Typography>
                <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {passwordRegrexError} </Typography>

                <TextField sx={{mt:1}}
type="file"
fullWidth
id="demo-helper-text-misaligned"

onChange={(e) => previewimage(e)}
helperText="preview image"

/>
                <TextField sx={{mt:1}}

fullWidth
id="demo-helper-text-misaligned"
label=" Confirm Password"
type="password"

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