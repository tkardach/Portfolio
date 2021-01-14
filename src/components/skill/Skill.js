import './Skill.css';
import React from 'react';
import ProgressBar from '../progress-bar/ProgressBar'

const Skill = ({iconUrl, name, percentage, color}) => {
  return (
    <div className="skill-container">
        <div className="skill-icon">
            <img 
                style={{width: 75, height: 75}}
                src={iconUrl} 
                alt={name}/>
        </div>
        <div className="skill-progress">
            <ProgressBar 
                name={name}
                percentage={percentage} 
                color={color}></ProgressBar>
        </div>
    </div>
  );
};

export default Skill;