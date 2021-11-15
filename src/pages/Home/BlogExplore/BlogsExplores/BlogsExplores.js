import React, { useEffect, useState } from 'react';
import BlogExploring from '../Blogexploring/BlogExploring';

const BlogsExplores = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch("https://enigmatic-bastion-18464.herokuapp.com/blogs")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
        <h1 className="m-5 text-danger">Latest Blogs</h1>
    <div className="cards">
        {
            blogs.map(blogExploring=><BlogExploring
            key={blogExploring.id}
            blogExploring={blogExploring}></BlogExploring>)
        }
    </div>
    </div>
    );
};

export default BlogsExplores;