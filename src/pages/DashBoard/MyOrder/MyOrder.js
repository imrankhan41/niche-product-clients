import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const MyOrder = () => {
    const {user}=useAuth()
    const [usersa,setUsersa]=useState([])
    const [click,setClick]=useState(false)
    useEffect(()=>{
        fetch(`https://enigmatic-bastion-18464.herokuapp.com/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            if(user.email){
                const reamainingUser =data.filter(userr=>userr.email===user.email)
                setUsersa(reamainingUser)}
        })
    },[])
    const handleDeleteUser =id=>{
        
        const proceed=window.confirm("Are you sure for deleting it?")
        if(proceed){
         const url=`https://enigmatic-bastion-18464.herokuapp.com/orders/${id}`
         fetch(url,{
             method:"DELETE"
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.deletedCount>0){
                 alert("deleted successfully")
                 const reamainingUser =usersa.filter(userr=>userr._id!==id)
                 setUsersa(reamainingUser)}
             })
        }
       
        }
        const toggleIn=e=>{
            setClick(e.target.checked)

            
        }
    return (
        <div className="My-orders">
        <h1>My Orders</h1>
        <div className="table-responsive">

     
        <table className="table mx-3">
            <thead className="bg-secondary ">
                <tr>

                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">productName</th>
                <th scope="col">phone number</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
               
                </tr>
            </thead>
            <tbody>
                {usersa.map((users,index)=>(
                     <tr>
                      <td>{index+1}</td> 
                     <td>{users.email}</td>
                     <td>{users.productName}</td>
                     <td>{users.phoneNumber}</td>
                     <td>{users.address}</td>
                     <td>
                         
                         <Link className="m-2 btn btn-outline-primary" to={`/edituser/${users._id}`}>Edit</Link>
                         <button className="btn btn-danger" onClick={()=>handleDeleteUser(users._id)}>Delete</button>
                         
                         </td>
                     </tr>
                ))}
            </tbody>
            </table>
            </div>
    </div>
    );
};

export default MyOrder;