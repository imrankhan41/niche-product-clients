import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import "./Blogs.css"

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect()
    return (
        <div>
            <h1 className="m-5 text-danger">Latest Blogs</h1>
        <div>
            {
                blogs.map(blog=><Blog
                key={blog.id}
                blog={blog}></Blog>)
            }
        </div>
        </div>
    );
};

export default Blogs;