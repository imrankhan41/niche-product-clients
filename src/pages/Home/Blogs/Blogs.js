import React, { useEffect, useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import "./Blogs.css"

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch("./blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data.slice(0,3)))
    },[])
    return (
        <div>
            <h1 className="m-5 text-danger">Latest Blogs</h1>
        <div className="cards">
            {
                blogs.map(blog=><Blog
                key={blog.id}
                blog={blog}></Blog>)
            }
        </div>
        <div>
        <Nav.Link href="/blogexplore"><Button className="px-5" variant="danger">Explore More Blogs</Button></Nav.Link>
             
        </div>
        </div>
    );
};

export default Blogs;