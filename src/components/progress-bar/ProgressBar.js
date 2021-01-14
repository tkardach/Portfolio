import './ProgressBar.css';
import React from 'react';

const ProgressBar = ({percentage, color, lblcolor}) => {
    const containerStyle = {
        height: 30,
        lineHeight: '30px',
        verticalAlign: 'middle'
    }

    const progressStyle = {
        height: '100%',
        width: '100%',
        backgroundColor: '$ffffff',
        borderRadius: 50,
        margin: 'auto'
    }

    const fillerStyle = {
        display: 'inline-block',
        height: 10,
        width: percentage ? `${percentage}%` : '100%',
        backgroundColor: color ? color : 'red',
        borderRadius: 'inherit',
        transition: 'width 0.2s'
      }
    
      const labelStyle = {
        padding: 0,
        margin: 0,
        color: lblcolor ? lblcolor : 'white',
        fontWeight: 'bold'
      }

    return (
        <div style={containerStyle}>
            <div style={progressStyle}>
                <div style={fillerStyle}>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;