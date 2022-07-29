import './review_rating.css'

import * as React from 'react';

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
// import Axios from 'react'; 
import { useState } from "react"; 
import { Icon } from '@iconify/react';
import ReviewPopup from '../review_popup/review_popup';
import  { useNavigate } from 'react-router-dom';

const labels = {
    1: 'Poor',
    2: 'Bad',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


const ReviewRate = () => {

    const [value, setValue] = React.useState(5); // rating
    const [hover, setHover] = React.useState(-1);
    const [isPending, setIsPending] = useState(false);
    const [review, setReview] = useState('');
    const [type_of_service, setTypeOfService] = useState(''); // how to get this 
    const [sp_uid, setSPUid] = useState(''); // how to get this
    const [triggerReviewPopup, setReviewPopup] = useState(false);
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {sp_uid, type_of_service, value, review};
        setIsPending(true);

        // setReviewPopup(true); 

        fetch('http://localhost:5000/review-rating', {
            method: 'POST', 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(response => {
            if (response.ok){
                console.log('Review added'); 
                setReviewPopup(true); 
                setTimeout(function () {
                    setReviewPopup(false);
                    navigate('/home');
                    window.location.reload(); 
                }, 1300); 
                setIsPending(false); 
            }else{
                throw new Error(response.statusTest)
            }
        }).catch(err =>{
            console.log(err)
        })
    };


    return(
        <body className='review_rating_wrapper'>
            <div className='container'>
                
                <div className="right">
                    <div className="heading">Write a Review!</div>
                    
                    <div className="box">

                        <p className='into'>Thanks for choosing <span className='a'>a</span><span className= 'morr'>morr</span>, we strive to provide the highest quality service and your feedback would be greatly appreciated as it will help us make sure we serve you and other amazing customers well in the future.</p>
                        
                        <p> Rating Service Provider Name</p>

                        <Box
                            sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                            <Rating
                                name="hover-feedback"
                                value={value}
                                precision={1}
                                getLabelText={getLabelText}
                                onChange={(event, newValue) => {
                                setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                setHover(newHover);
                                }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                            )}
                        </Box>

                        <form onSubmit={handleSubmit}>
                            <div className="inputs">

                                <div className="input1" id="review"><textarea 
                                    className="textbox"
                                    rows="10" 
                                    cols="40" 
                                    required
                                    value={review}
                                    onChange={(e)=>setReview(e.target.value)}
                                    type="text" placeholder="Type your review here..."/>
                                </div>


                                { !isPending && <button id="service" type="submit" >Send Review <Icon icon="akar-icons:arrow-right" inline={true} style={{ verticalAlign: '-0.3em', fontSize:'28px' }}/></button>}
                                { isPending && <button disabled id="service" type="submit">Sending ... <Icon icon="akar-icons:arrow-right" inline={true} style={{ verticalAlign: '-0.3em', fontSize:'28px' }}/></button>}
                            </div>
                        </form>
                    </div>
                    
                </div>

            </div>
            <ReviewPopup trigger={triggerReviewPopup}/>
        </body>
    );
}

export default ReviewRate; 