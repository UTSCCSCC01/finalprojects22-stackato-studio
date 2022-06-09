import React from 'react'; 
import '../../App.css'; 
import paints from "../../assets/paints.png"; 
// import ig from "../../assets/ig.png"; 
import './ContactUs.css';

function ContactUs(){
    return (
        <div>
            <h1 style={{textAlign: "center"}} className = "heading"> Contact Us</h1>
            { <div class="dashed-box"></div> }
            <img className='img2' src={paints}></img>
            <div className = "question"> 
                <h3 style={{textAlign:"Left"}}>Have questions about</h3>
                <h3 style={{textAlign:"Left"}}>features, pricing, services or</h3>
                <h3 style={{textAlign:"Left"}}>simply want to reach out?</h3>
                <h3 style={{textAlign:"Left"}}>Our team would love to help.</h3>
            </div>
            

        </div>
    );
}

export default ContactUs; 