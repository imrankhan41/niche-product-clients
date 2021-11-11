import React from 'react';
import { useParams } from 'react-router';

import "./ProductDetails.css"
const ProductDetails = () => {
    const {id}=useParams()



    return (
        <div className="mt-5">
            <h1 className="pt-5">Booing{id}</h1>
        </div>
    );
};

export default ProductDetails;