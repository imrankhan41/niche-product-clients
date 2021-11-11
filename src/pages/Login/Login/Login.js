import React from 'react';
import { Link } from 'react-router-dom';

import "./Login.css"
const Login = () => {
  
    return (
        <div className="login">
            
            <h1>Please Log in</h1>
            <form >
            <input  className="login1" type="email" name="" id="" placeholder="Email" required/> <br/>
            <input className="login1" type="password" name="" id="" placeholder="Password" required/> <br />
            <button className="login1 button">LogIn</button><br />
            <Link className="text-decoration-none" to="/register"> <p >No Account? Try Register</p> </Link>
            </form>
            <div>Or</div>
            <button  className="login1 button">Google Log in</button>
        </div>
    );
};

export default Login;