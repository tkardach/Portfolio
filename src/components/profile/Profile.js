import './Profile.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const Profile = ({name, gitUrl, linkedInUrl, email, profilePicUrl}) => {
  const newGitUrl = gitUrl ? gitUrl : '#';
  const newLinkedInUrl = linkedInUrl ? linkedInUrl : '#';
  const newEmail = email ? email : '#';
  const backgroundImageUrl = profilePicUrl ? profilePicUrl : '#';

  const profileStyle = {
    backgroundImage: `url(${backgroundImageUrl})`
  }

  return (
    <div className="profile-container">
        <div 
          className="profile-image"
          style={profileStyle} />
        <div className="profile-info">
            <h1>{name}</h1>
            <div className="social">
              <a
                href={newLinkedInUrl}
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon 
                  className="icon-button" 
                  icon={faLinkedin}/>
              </a>
              <a
                href={newGitUrl}
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon 
                  className="icon-button" 
                  icon={faGithubSquare}/>
              </a>
              <a
                href={`mailto:${newEmail}`}>
                <FontAwesomeIcon 
                  className="icon-button" 
                  icon={faEnvelopeSquare}/>
              </a>
            </div>
        </div>
    </div>
  );
};

export default Profile;