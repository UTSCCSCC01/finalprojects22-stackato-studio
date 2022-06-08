import React from 'react'; 
import '../../App.css'; 
import paints from "../../assets/paints.png"; 
import ig from "../../assets/ig.png"; 
import './ContactUs.css';

function ContactUs(){
    return (
       <div className = 'image' >
           <img className='img1' src={ig}></img>
           <img className='img2' src={paints}></img>
        </div>
    );
}

export default ContactUs; 