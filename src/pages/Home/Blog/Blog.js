import React from 'react';
import "./Blog.css"
const Blog = (props) => {
    const {name,subname,description}=props.blog
    return (
        <div>
            <h1>{name}</h1>
            <p>{description?.description1}</p>
          <img src={description?.img1} alt="" srcset="" />
        </div>
    );
};

export default Blog;