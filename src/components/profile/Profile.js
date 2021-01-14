import './Profile.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const Profile = ({name}) => {
  return (
    <div className="profile-container">
        <div className="profile-image"/>
        <div className="profile-info">
            <h1>{name}</h1>
            <div className="social">
                <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x"/>
                <FontAwesomeIcon className="icon" icon={faGithubSquare} size="2x"/>
                <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} size="2x"/>
            </div>
        </div>
    </div>
  );
};

export default Profile;