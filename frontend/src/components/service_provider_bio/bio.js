import React , { useEffect, useState }from 'react';
import './styles.css'
import { Icon } from '@iconify/react';
import './service_provider_bio'
import {Button, Rating, Avatar, requirePropFactory, useScrollTrigger, TextField} from '@mui/material';

const Bio = () => {

    // initializing values
    const [user, setUser] = useState({full_name: "", address: "", total_rating: 0, num_ratings: 0, profile_photo: null});
    const [addr, setAddr] = useState('');
    const [img, setImage] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [fullName, setFullName] = useState('');

        const [value, setValue] = React.useState();
      
    // dummy get request to get data
    useEffect(() => {
        /*fetch("http://localhost:5000/get-profile", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setUser(data);
            console.log(data);
          })
        );*/
        setUser({full_name: "Lorem Ipsum Salons", address: "100 Lorem Ipsum Road - M1C 0B6", total_rating: 0, num_ratings: 0, profile_photo: null})
        setAddr("100 Lorem Ipsum Road - M1C 0B6");
        setFullName("Lorem Ipsum Salons");
        // setImage(require("../../../assets/profile_photos/4.jpg"))
      }, []);
    
    // changing addr according to input
    const handleChange = (e) => {
        setAddr(e.target.value);
    }

    // exit editing mode when user presses enter or escape
    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape"){
            setIsEdit(false);
            event.target.blur();
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        e.target.blur();
    }

    return(
        <div id="service_provider_bio">

<div id="service_provider_name">About {fullName}</div>
               
                    {!isEdit ? 
                    (
                        <div id="user_address">{addr}<button id="edit_button" onClick={ () => {setIsEdit(true)}}><Icon icon="mdi:pencil"  /></button></div>
                    ) : (
                        <textarea id="new_address" rows="10" cols="50" value={addr} onChange={handleChange} onKeyDown={onKeyDown} ></textarea>
                    ) }
                    <button id="save_changes" onClick={handleSubmit}>Save Changes</button>
           

 
            

        </div>
    )
}

export default Bio