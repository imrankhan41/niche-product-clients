import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const BlogExploring = (props) => {
    const {name,subname,description}=props.blogExploring
    return (
        <div>
            <CardGroup >
            <Card className="m-4 text-start">
                <Card.Img variant="top" className="" src={description?.img1} />
                <Card.Body>
                <Card.Title>{name.slice(0,20)}</Card.Title>
                <Card.Title>{subname}</Card.Title>
                <Card.Text>
                    {description?.description1.slice(0,140)}
                </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-danger">
                <small className="text-white">Read More <i class="fas fa-chevron-right"></i></small>
                </Card.Footer>
            </Card>
            </CardGroup>
           
        </div>
    );
};

export default BlogExploring;