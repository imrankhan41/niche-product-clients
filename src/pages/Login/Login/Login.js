import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import "./Login.css"
const Login = () => {
    const [loginData,setLoginData]=useState({})
    const {user, loginUser}=useAuth()
    const handleOnChange=e=>{
        const field =e.target.name;
        const value =e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData)
        console.log(newLoginData)
    }
  const handleLoginSubmit=e=>{
    loginUser(loginData.email, loginData.password)
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
            <button  className="login1 button">Google Log in</button>
            </form>
            
        </div>
    );
};

export default Login;