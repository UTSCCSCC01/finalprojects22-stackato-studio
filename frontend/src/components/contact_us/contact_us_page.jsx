import './styles.css'

import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { MuiThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import arrow from "../../assets/arrow.png";

import paints from "../../assets/paints.png";

import ig from "../../assets/ig.png";
import twitter from "../../assets/twitter.png";
import mail from "../../assets/mail.png";
import location from "../../assets/location.png";


const contact_us_page = () => {
    return(
        <body>
            <img src={paints} className="paints" alt="paints" />
            <span className="heading">Contact Us</span>
            <section className="box">

             <form>
                <div className="inputs">
                    <div className='row'>
                    <div className="input"><input type="text" placeholder="Full Name"/></div>
                    </div>

                    <div className='row'>
                    <div className="input"><input type="text" placeholder="Email Address" required/></div>
                    </div>

                    <div className='row'>
                    <div className="input"><input type="text" placeholder="Subject"/></div>
                    </div>

                    <div className='row'>
                    <div className="input1" id="message"><textarea className="textbox" rows="10" cols="40" type="text" placeholder="Type your message here..."/></div>
                    </div>
                </div>

                <div className="cardFooter">
                    <input className="submit" type="submit" value="Send Message" /> 
                </div>  
            </form>

            </section>

            <section className="box2">
                <span> Have questions about features, pricing, services or simply want to reach out? Our team would love to help.</span>
                <br></br>
                <img src={ig} className="ig" alt="ig" />
                <span className="info"></span>
                <br></br>
                <img src={twitter} className="twitter" alt="twitter" />
                <br></br>
                <img src={mail} className="mail" alt="mail" />
                <br></br>
                <img src={location} className="location" alt="location" />
                <br></br>
            </section>

        </body>
    );
}

export default contact_us_page; 