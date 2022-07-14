// import './Delete_popup'

import * as React from 'react';
import { useState } from "react"; 
// import Axios from 'react'; 
import { Icon } from '@iconify/react';
import Delete_popup from '../deletion_popup/DeletionPopup';

const DeleteAccount = () => {
    return(
        <body>
            <h1> Are you sure you want to delete your account? </h1>
            <p> Deleting account will result in losing all your data.</p>

            <button> Yes </button>
            <button> No </button>
            {/* <DeletePopup trigger={triggerDeletePopup} /> */}
        </body>
    );
}

export default DeleteAccount; 