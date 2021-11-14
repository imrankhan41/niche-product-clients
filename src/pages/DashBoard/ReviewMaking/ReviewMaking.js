import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const ReviewMaking = () => {
    const {user}=useAuth()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:5000/reviews',{
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
            <h1>Please Put Your Valuable Opinion:</h1>
            <div className="row d-flex justify-content-center">
                   
                   <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                   <form className="add-user" onSubmit={handleSubmit(onSubmit)}>
                   <input {...register("peronimg")}  placeholder="Photo" value={user?.img}/>
                    <input {...register("email")}  placeholder="Personal email" value={user?.email}/>
                    <input type="floatValue" {...register("rating")} placeholder="Rating"/>
                    <textarea {...register("description")} placeholder="Description"/>
                    <input type="Submit"/>
                    </form>
                   </div>
               </div>
        </div>
    );
};

export default ReviewMaking;