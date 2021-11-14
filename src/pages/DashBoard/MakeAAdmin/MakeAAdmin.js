import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import "./MakeAAdmin.css"
const MakeAAdmin = () => {
    
    const [email,setEmail]=useState('')
    const handleOnChange =e =>{
        setEmail(e.target.value)
    }
    const handleSubmit=e=>{
    
        const user ={email}
        fetch('http://localhost:5000/users/admin',{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>
        console.log(data))
       
      
    }
    
    return (
        <div>
            <h1>Please Make An Admin</h1>
            <form onSubmit={handleSubmit}>
            <input  className="login1" onBlur={handleOnChange} type="email" name="email" id="" placeholder="Email" required/><br />
            <button type='submit' className="login1 button">Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAAdmin;