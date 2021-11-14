import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BlogDetails = () => {
    const [details,setDetails]=useState();
    const {blogId}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/blogs/${blogId}`)
        .then(res=>res.json())
        .then(data =>setDetails(data))
    },[])
    return (
        <div className="p-3 mt-5">
            <h1 className="pt-5 ">{details?.name}</h1>
            <h4 className="text-muted">{details?.subname}</h4>
            <img className="img-fluid" src={details?.img1} alt="" />
            <p className="text-start">{details?.description1}</p>
            <hr />
            <h1 className="pt-5 ">{details?.name2}</h1>
            <img className="img-fluid" src={details?.img2} alt="" />
            <p className="text-start">{details?.description2}</p>
            <hr />
            <h1 className="pt-5 ">{details?.name3}</h1>
            <img className="img-fluid" src={details?.img3} alt="" />
            <p className="text-start">{details?.description3}</p>
        </div>
    );
};

export default BlogDetails;