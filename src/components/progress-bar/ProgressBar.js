import './ProgressBar.css';
import React from 'react';

const ProgressBar = ({className, percentage, name, color, lblcolor, lblFontSize}) => {
    const percentageSet = percentage ? true : (percentage === 0 ? true : false);
    const fontSize = lblFontSize ? lblFontSize : '12px';
    className = className ? className : '';

    const fillerStyle = {
        width: percentageSet ? `${percentage}%` : '100%',
        backgroundColor: color ? color : 'blue',
    }

    const labelStyle = {
        color: lblcolor ? lblcolor : 'white',
        fontSize: fontSize,
        height: fontSize
    }

    const nameStyle = {
        width: percentageSet ? `calc(${percentage}% - ${fontSize})` : 'auto'
    }

    return (
        <div className={`${className} progress-container`}>
            <div style={fillerStyle} className="progress-filler">
                <p 
                    className="progress-label float-left" 
                    style={{...labelStyle, ...nameStyle}}>{name}</p>
                <p 
                    className="progress-label float-right" 
                    style={labelStyle}>{`${percentage}%`}</p>
            </div>
        </div>
    );
};

export default ProgressBar;