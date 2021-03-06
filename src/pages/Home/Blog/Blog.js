import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Blog.css"
const Blog = (props) => {
    const {name,subname,description1,img1,_id}=props.blog
    const click =()=>{
        alert("click explore more blog button to show  details blog post")
    }
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
               
                    <small onClick={click} className="text-white ">Read More <i class="fas fa-chevron-right"></i></small>
                 
                </Card.Footer>
            </Card>
            </CardGroup>
           
        </div>
       
        
    );
};

export default Blog;