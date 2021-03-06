import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Products.css"
const Products = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch("https://enigmatic-bastion-18464.herokuapp.com/products")
        .then(res=>res.json())
        .then(data =>setProducts(data.slice(0,6)))
    },[])
    return (
        <div id="products" className="m-auto mt-5 row " >
            <h1 className="fw-bolder text-danger">New Trendings</h1>
            <div className="cards">
            {
                products.map(product =><Product key={product.id}
                product={product}
                ></Product>)
            }
            </div>
           
        </div>
    );
};

export default Products;