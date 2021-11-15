import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    const [user,setUser]=useState([])
    const [click,setClick]=useState(false)
    useEffect(()=>{
        fetch('https://enigmatic-bastion-18464.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setUser(data))
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
                 const reamainingUser =user.filter(userr=>userr._id!==id)
                 setUser(reamainingUser)}
             })
        }
       
        }
        const toggleIn=e=>{
            setClick(e.target.checked)

            
        }
    return (
        <div className="My-orders">
        <h1>Manage All Orders</h1>
        <div className="table-responsive">

     
        <table className="table mx-3">
            <thead className="bg-secondary ">
                <tr>
                <th scope="col">Email</th>
                <th scope="col">productName</th>
                <th scope="col">phone number</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
               
                </tr>
            </thead>
            <tbody>
                {user.map((user,index)=>(
                     <tr>
                     <td>{user.email}</td>
                     <td>{user.productName}</td>
                     <td>{user.phoneNumber}</td>
                     <td>{user.address}</td>
                     <td>
                         
                         <Link className="m-2 btn btn-outline-primary" to={`/edituser/${user._id}`}>Edit</Link>
                         <button className="btn btn-danger" onClick={()=>handleDeleteUser(user._id)}>Delete</button>
                         <button className="btn btn-danger">{click? "Approved" :"Pending"} </button><form><input onChange={toggleIn} type="checkbox"/></form>
                         </td>
                     </tr>
                ))}
            </tbody>
            </table>
            </div>
    </div>
    );
};

export default ManageAllOrders;