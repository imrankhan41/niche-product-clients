import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import "./Review.css"
const Review = (props) => {
    const {img,comments,rating,email}=props.review
    return (
        <div>
            <CardGroup >
            <Card className="m-2 card-item card-size">
              
                <Card.Img variant="top" className="img-user" src={img} />
                <Card.Title>{email}</Card.Title>
                <Card.Body>
                
                <Card.Text>
                   {comments}
                </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-danger w-100">
                <small className="text-white ">{rating} <Rating className="text-warning"
                initialRating={rating}  
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly></Rating></small>
                </Card.Footer>
               
            </Card>
            </CardGroup>
        </div>
    );
};

export default Review;