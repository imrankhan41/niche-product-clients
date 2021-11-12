import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

import "./ProductDetails.css"
const ProductDetails = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("Inserted successfully")
            }
            console.log(data)
            reset()
        })
        
    };

    const {user,email}=useAuth();
    const [details,setDetails]=useState();
    const {productid}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${ productid}`)
        .then(res=>res.json())
        .then(data =>setDetails(data))
    },[])



    return (
        <div className="mt-5">
           <div className="row">
               <div className="p-5 text-start border-end col-lg-7 col-md-6 col-sm-12 col-12">
                   <img className="border border-secondary img-fluid" src={details?.img} alt="" />
                   <h2 className="mt-3 ">Description :</h2>
                   <p className=" text-start">{details?.description}</p>
                   <br />
                   <br />
                   <br />
                <p> Brand: {details?.brand}</p>
                <p> Type: {details?.type}</p>
                <p> Wheel Size: {details?.wheelSize}</p>
                <p> Motor Manufacturer: {details?.motorManufacturer}</p>
                <p>Item condition: {details?.itemCondition}</p>
                <p> Availability: {details?.availability}</p>
                 <h1>Specification:</h1> <br />
                 <p>{details?.specifications}</p>


               </div>
               <div className="col-lg-5 col-md-6 col-sm-12 col-12 booking text-secondary add1-user">
               <img className="img-fluid" src={details?.logo} alt="" />
               <h1>{details?.name}</h1>
               <p>{details?.subname}</p>
               <h4>Now ${details?.price}</h4>
                
                 {/* <img src={users?.photoURL} alt="" srcset="" /> */}
                  <form className="add-user" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" value={user?.displayName} />
                    <input {...register("email")}  placeholder="Personal email" value={user?.email}/>
                    <textarea {...register("address")} placeholder="Address"/>
                    <textarea {...register("city")} placeholder="City" />
                    <input type="number" {...register("phoneNumber")} placeholder="Phone Number"/>
                    <input {...register("productName", { required: true, maxLength: 200 })} placeholder="Name" value={details?.name} />
                    <input {...register("productImg")}  placeholder="Product Photo" value={details?.img}/>
                    <input type="number" {...register("productPrice")} placeholder="Price" value={details?.price}/>
                    <textarea {...register("productDescription")} placeholder="Description" value={details?.description}/>
                        <input type="Submit"/>
                        
                </form>
              
               </div>
               <hr />
           </div>
        </div>
    );
};

export default ProductDetails;