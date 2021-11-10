import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch("./products.json")
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className="m-auto mt-5 row " >
        <h1 className="mt-5 fw-bolder text-danger">New Trendings</h1>
        <div className="cards">
        {
            products.map(explore =><Explore key={explore.id}
            explore={explore}
            ></Explore>)
        }
        </div>
       
    </div>
    );
};

export default Explores;