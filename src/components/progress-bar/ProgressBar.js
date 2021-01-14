import './ProgressBar.css';
import React from 'react';

const ProgressBar = ({percentage, name, color, lblcolor}) => {

    const fillerStyle = {
        width: percentage ? `${percentage}%` : '100%',
        backgroundColor: color ? color : 'blue',
      }
    
      const labelStyle = {
        color: lblcolor ? lblcolor : 'white',
      }

    return (
        <div className="progress-container">
            <div style={fillerStyle} className="progress-filler">
                <p 
                    className="progress-label float-left" 
                    style={labelStyle}>{name}</p>
                <p 
                    className="progress-label float-right" 
                    style={labelStyle}>{`${percentage}%`}</p>
            </div>
        </div>
    );
};

export default ProgressBar;