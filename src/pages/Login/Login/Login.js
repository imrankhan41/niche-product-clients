import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import "./Login.css"
const Login = () => {
    const [loginData,setLoginData]=useState({})
    const {user, loginUser,isLoading,autherror,signinUsingGoogle}=useAuth()
    const location =useLocation()
    const history =useHistory()
    const handleOnChange=e=>{
        const field =e.target.name;
        const value =e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData)
        newLoginData.value={}
        console.log(newLoginData)
    }
    const handleGoogleSignIn =()=>{
      signinUsingGoogle(location,history)
      const destination =location?.state?.from || "/";
      history.replace(destination)
    }
  const handleLoginSubmit=e=>{
    loginUser(loginData.email, loginData.password,location,history)
      e.preventDefault()
  }
    return (
        <div className="login">
            
            <h1>Please Log in</h1>
          <form onSubmit={handleLoginSubmit}>
            <input  className="login1" onBlur={handleOnChange} type="email" name="email" id="" placeholder="Email" required/> <br/>
            <input className="login1" type="password" 
        name="password"  onBlur={handleOnChange} id="" placeholder="Password" required/> <br />
            
            <button type='submit' className="login1 button">LogIn</button><br />
            <Link className="text-decoration-none" to="/register"> <p >No Account? Try Register</p> </Link>
            <div>Or</div>
            <button onClick={handleGoogleSignIn}  className="login1 button">Google Log in</button>
            {
                isLoading && <Spinner animation="border" variant="danger" />
            }
            {
                user?.email &&   <div className="text-center text-primary">
               <i class="far fa-check-circle"></i> User Has Been Created Successfully
              </div>
            }
            {
                autherror &&   <Alert className="text-center text-warning"> <i class="fas fa-backspace"></i>
                {autherror}
              </Alert>
            }
            </form>
           
        </div>
    );
};

export default Login;