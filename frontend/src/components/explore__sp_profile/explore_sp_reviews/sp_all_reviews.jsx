import React , { useEffect, useState }from 'react';
import { Rating, Avatar } from '@mui/material';
import './sp_all_reviews.css'
import ServiceProviderReviewCard from './service_provider_review';

function SPAllReviews( {id} ) {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/get-explore-sp-reviews/${id}`, {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setReviews(data)
          })
        );
      }, []);

    return (
        <>
            <div id="reviews_heading">Reviews</div>
            <div>
                {reviews.map(data => (
                <ServiceProviderReviewCard review={data}/>
                ))}
            </div>
        </>
    )
    }

export default SPAllReviews