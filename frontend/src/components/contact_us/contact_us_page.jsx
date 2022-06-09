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

const ITEM_HEIGHT = 45;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const services = [
  'Hairdresser',
  'Barber',
  'Cleaner',
  'Massage',
  'Makeup',
  'Eyebrow Tech',
  'Eyelash Tech',
];

const contact_us_page = () => {

    return(
        <body>
            <section className="box">

             <form>
                <div className="inputs">
                    <div className='row'>
                    <div className="input"><input type="text" placeholder="Email Address"/></div>
                    <div className="input"><input type="text" placeholder="Full Name"/></div>
                    </div>

                    <div className='row'>
                    <div className="input"><input type="password" placeholder="Password"/></div>
                    <div className="input"><input type="password" placeholder="Re-enter password"/></div>
                    </div>

                    <div className='row'>
                    <div className="input" id="address"><input type="text" placeholder="Address"/></div>
                    <div className="input" id="attachFile">
                        <label for="myFile">Attach ID: </label>
                        <input className="id" type="file" id="myFile" name="filename"/>
                    </div>
                    </div>
                </div>

                <div className="cardFooter">
                    <span className='terms'>By clicking SIGN UP, I agree to amorr's <a href='#'>term's and conditions</a> and <a href='#'>privacy policy</a></span>
                    <input className="submit" type="submit" value="SIGN UP" />
                </div>  
            </form>

            </section>
        </body>
    );
}

export default contact_us_page; 