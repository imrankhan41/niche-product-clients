import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddBlog = () => {
    const {user}=useAuth()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        fetch('https://enigmatic-bastion-18464.herokuapp.com/blogs',{
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
              reset()
          }
          console.log(data)
      })
  }
    return (
        <div>
        <h4 className="text-primary">Please Add Blog <br /> Dear Mr. {user?.displayName} By Using Your Email :{user?.email}</h4>
      
        <div className="row d-flex justify-content-center">
              
               <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              
               <form className="add-user" onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("name")} placeholder="Name"/>
                <input  {...register("subname")} placeholder="Subname"/>
                <input {...register("img1")}  placeholder="image1" />
                <textarea {...register("description1")} placeholder="Description1"/>
                <input  {...register("name2")} placeholder="Name2"/>
                <input {...register("img2")}  placeholder="image2" />
                <textarea {...register("description2")} placeholder="Description2"/>
                <input  {...register("name3")} placeholder="Name3"/>
                <input {...register("img3")}  placeholder="image3" />
                <textarea {...register("description3")} placeholder="Description3"/>
                <input type="Submit"/>
                </form>
               </div>
           </div>
    </div>
    );
};

export default AddBlog;