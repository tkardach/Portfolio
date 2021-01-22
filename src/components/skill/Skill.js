import './Skill.css';
import React from 'react';
import ProgressBar from '../progress-bar/ProgressBar'

const Skill = ({iconUrl, name, percentage, color}) => {
  const fontSize = iconUrl ? undefined : '16px';

  const containerStyle = {
    padding: '15px 0'
  }

  const renderIcon = () => {
    if (iconUrl)
      return ( <img style={{width: 75, height: 75}} src={iconUrl} alt={name}/> );
    return ( <div/> );
  }

  return (
    <div className="skill-container" style={iconUrl ? {} : containerStyle}>
        <div className="skill-icon">
          {renderIcon()}
        </div>
        <div className="skill-progress">
            <ProgressBar 
                name={name}
                percentage={percentage} 
                color={color}
                lblFontSize={fontSize}></ProgressBar>
        </div>
    </div>
  );
};

export default Skill;