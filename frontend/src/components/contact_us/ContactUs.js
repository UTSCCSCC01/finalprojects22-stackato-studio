import React from 'react'; 
import '../../App.css'; 
import paints from "../../assets/paints.png"; 
// import ig from "../../assets/ig.png"; 
import './ContactUs.css';

function ContactUs(){
    return (
        <div>
            <h1 style={{textAlign: "center"}}> Contact Us</h1>
            {/* <div class="dashed-box">Dashed box</div> */}
            <div className = "head-text">
                <div className = "head-image">
                    <img src={paints}></img>
                </div>
                <div class="text-on-image">
                    <h3>We'd love to get in touch with you</h3>
                </div>

            </div>
        </div>
    );
}

export default ContactUs; 