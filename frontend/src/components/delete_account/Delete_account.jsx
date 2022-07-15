// import './Delete_popup'

import * as React from 'react';
import { useState } from "react"; 
// import Axios from 'react'; 
import { Icon } from '@iconify/react';
import Delete_popup from '../deletion_popup/DeletionPopup';
import './Delete_account.css'

const DeleteAccount = () => {

    

    const handleYes= () => {

        // fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
        // .then(() => this.setState({ status: 'Delete successful' }));

        fetch('http://localhost:5000/delete-account', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: 'include',
        }).then(response => {
            if (response.ok){
                console.log('User Deleted!'); 
                window.location.reload();
            }else {
                throw new Error(response.statusText)
            }
        }).catch(err => {
            console.log(err)
        })
    };

    return(
        <body className='delete_account_wrapper'>
            <div className="DAbox">
                <h1 className='DeleteAccount'> Delete Account! </h1>
                <p className='sure'> Are you sure you want to delete your account? </p>
                <p className='sure'> Deleting account will result in losing all your data.</p>

                {/* <button className = 'yes' onClick={handleYes}> <a href='/initial-signup-landing' >Yes</a> </button> */}
                <button className = 'yes' onClick={handleYes}> <a href='/initial-signup-landing' >Yes</a> </button>
                <button className='no'> <a href='/home' >No</a></button>
            </div>
            
            {/* <DeletePopup trigger={triggerDeletePopup} /> */}
        </body>
    );
}

export default DeleteAccount; 