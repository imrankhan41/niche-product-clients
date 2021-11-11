import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import "./Reviews.css"
const Reviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch("./reviews.json")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div id="reviews">
            <h1 className="text-danger">Reviews</h1>
            <div className="reviews">
                {
                     reviews.map(review =><Review key={review.id}
                        review={review}
                        ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;