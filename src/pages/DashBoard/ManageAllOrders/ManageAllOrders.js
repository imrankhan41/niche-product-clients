import React, { useEffect, useState } from 'react';

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
    return (
        <div>
            
        </div>
    );
};

export default ManageAllOrders;