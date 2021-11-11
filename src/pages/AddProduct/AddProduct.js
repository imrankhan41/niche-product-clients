import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddProduct.css"
const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        fetch('',{
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
      })
  }
    return (
        <div className="add-user">
            <h1>Please Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("logo")}  placeholder="Logo url"/>
            <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />
            <input {...register("subname", { required: true, maxLength: 500 })} placeholder="SubName" />
            <textarea {...register("description")} placeholder="Description" />
            <input {...register("img")}  placeholder="image url"/>
            <input type="number" {...register("price")} placeholder="price"/>
            <textarea {...register("brand")} placeholder="Brand"/>
            <textarea {...register("type")} placeholder="Type"/>
            <textarea {...register("gender")} placeholder="Gender"/>
            <textarea {...register("wheelSize")} placeholder="WheelSize"/>
            <textarea {...register("motorManufacturer")} placeholder="MotorManufacturer"/>
            <textarea {...register("itemCondition")} placeholder="ItemCondition"/>
            <textarea {...register("availability")} placeholder="Availability"/>
            <textarea {...register("specifications")} placeholder="Specifications"/>
            
            
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;