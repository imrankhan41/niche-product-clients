import React from 'react';
import { Link } from 'react-router-dom';

import "./Register.css"
const Register = () => {
  
    return (
        <div className="login">
            
            <h1>Please Register</h1>
            <form >
                
            <input  className="login1" 
            type="email" 
            name="" 
            id="" 
            placeholder="Email" required/> <br/>
            
            <input className="login1" 
            type="password" 
            name="" id="" 
            placeholder="Password" required/> <br />
            
            <button className="login1 button">Register</button> <br />
            <Link className="text-decoration-none" to="/login">Already Registered? Try Login</Link>
       
            </form>
            <div>Or</div>
            <button  className="login1 button">Google Log in</button>
        </div>
    );
};

export default Register;