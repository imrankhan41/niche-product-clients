import "./OrderDetails.css"
import React from 'react';
import { useParams } from 'react-router';

const OrderDetails = () => {
    const{id}=useParams()
    console.log(id)
    return (
        <div className="details">
            <h1 className="pt-5">UseParam{id}</h1>
        </div>
    );
};

export default OrderDetails;