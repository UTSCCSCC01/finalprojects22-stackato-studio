import React from 'react'
import './DeletionPopup.css'
import { Icon } from '@iconify/react';

function DeletionPopup(props) {
  return (props.trigger) ? (
    <div className="deletionPopup">
        <div className="DPoverlay"></div>
        <div className="deletionPopupContent">
            <div className="deletionUpper">
              <Icon id="deletionIcon" icon="charm:circle-cross"/>
            </div>
            <div className="deletionLower">
              <h1 id="deletionHeading">Delete Account!</h1>
              <p id="deletionPara">Are you sure you want to delete your account?</p>
              <a href="/login" id="DPcontBtn" onClick={() => props.setTrigger(false)}>Delete</a>
            </div>
        </div>
  </div>
  ) : "";
}

export default DeletionPopup