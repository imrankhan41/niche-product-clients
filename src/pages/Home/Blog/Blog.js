import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Blog.css"
const Blog = (props) => {
    const {name,subname,description1,img1,_id}=props.blog
    return (
        
        <div>
            <CardGroup >
            <Card className="m-4 text-start">
                <Card.Img variant="top" className="" src={img1} />
                
                <Card.Body>
                <Card.Title>{name.slice(0,20)}</Card.Title>
                <Card.Title>{subname}</Card.Title>
                <Card.Text>
                    {description1.slice(0,140)}
                </Card.Text>
            
                </Card.Body>
                <Card.Footer className="bg-danger">
                <Link className="text-decoration-none"  to={`/blogs/${_id}`}>
                    <small className="text-white ">    Read More <i class="fas fa-chevron-right"></i></small>
                    </Link>
                </Card.Footer>
            </Card>
            </CardGroup>
           
        </div>
       
        
    );
};

export default Blog;