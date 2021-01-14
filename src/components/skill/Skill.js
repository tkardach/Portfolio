import './Skill.css';
import React from 'react';
import ProgressBar from '../progress-bar/ProgressBar'

const Skill = ({name, percentage, color}) => {
  return (
    <div className="skill-container">
        <div className="skill-icon">
            <img 
                style={{width: 100, height: 100}}
                src={'NodeJSLogo.png'} 
                alt={'test'}/>
        </div>
        <div className="skill-progress">
            <ProgressBar 
                percentage={percentage} 
                color={color}></ProgressBar>
        </div>
    </div>
  );
};

export default Skill;