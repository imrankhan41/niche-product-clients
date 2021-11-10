import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "./Product.css"
const Product = (props) => {
    const{name,logo,price,img,subname,availability}=props.product
    return (
        <div className="m-2 ">
            <CardGroup>
                <Card className ="p-2">
                    <Card.Img className="img-size"  variant="top"src={img} />
                    <Card.Body className="text-start">
                        <img className="logo-size" src={logo} alt="" />
                    
                    <Card.Text>
                    <Card.Title className="text-danger">Now ${price}</Card.Title>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title >{subname}</Card.Title>
                    <Card.Title >{availability}</Card.Title>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer  className="bg-danger">
                    <small className="text-white">Click & Collect and  Buy Now</small>
                    </Card.Footer>
                </Card> 
                </CardGroup>
        </div>
    );
};

export default Product;