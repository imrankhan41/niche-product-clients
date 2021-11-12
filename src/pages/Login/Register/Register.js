import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import "./Register.css"
const Register = () => {
    const [loginData,setLoginData]=useState({})
    const {user, registerUser,isLoading,autherror}=useAuth()
  const handleOnChange=e=>{
    const field =e.target.name;
    const value =e.target.value;
    const newLoginData = {...loginData}
    newLoginData[field]=value;
    setLoginData(newLoginData)
    console.log(newLoginData)
}
const handleLoginSubmit=e=>{
if(loginData.password!== loginData.password2){
}
registerUser(loginData.email, loginData.password)
  e.preventDefault()
}
    return (
        <div className="login">
            
            <h1>Please Register</h1>
            <div>
             {!isLoading &&   <form onSubmit={handleLoginSubmit}>
            <input  className="login1" onBlur={handleOnChange} type="text" name="name" id="" 
            placeholder="Name" required/> <br/>
            <input  className="login1" onBlur={handleOnChange} type="email" name="email" id="" placeholder="Email" required/> <br/>
            <input className="login1" onBlur={handleOnChange} type="password" name="password" id="" placeholder="Password" required/> <br />
            <input className="login1" type="password" name="password2"  onBlur={handleOnChange} id="" placeholder="Confirm Password" required/> <br />
            <button type='submit' className="login1 button">Register</button> <br />
            <Link className="text-decoration-none" to="/login">Already Registered? Try Login</Link>
            <div>Or</div>
            <button  className="login1 button">Google Log in</button>
            </form>}
            {
                isLoading && <Spinner animation="border" variant="danger" />
            }
            {
                user?.email &&   <div className="text-center text-primary"> <i class="far fa-check-circle"></i>
                User Has Been Created Successfully
              </div>
            }
            {
                autherror &&   <div className="text-center text-warning"><i class="fas fa-backspace"></i>
                {autherror}
              </div>
            }
            </div>
           
        </div>
    );
};

export default Register;