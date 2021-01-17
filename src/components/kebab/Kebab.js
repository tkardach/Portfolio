import './Kebab.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


const Kebab = ({className, count, selIndex, vertical, size, color, selColor, kebabClick}) => {
    const newSize = size ? size : '16px';
    const newCount = count ? count : 3;
    const newVertical = vertical ? true : false;
    const newColor = color ? color : 'gray';
    const newSelColor = selColor ? selColor : 'white';
    const newKebabClick = kebabClick ? kebabClick : (index) => {};
    const newSelIndex = selIndex ? selIndex : 0;
    
    const dots = [];

    const iconStyle = {
        fontSize: newSize
    }

    const unselectedColor = {
        color: newColor
    }

    const selectedColor = {
        color: newSelColor
    }

    const horizontal = {
        display: 'inline-block'
    }

    const changeState = (index) => {
        if (!isNaN(index)) {
            newKebabClick(index);
        }
    }

    for (let i=0; i<newCount; i++) {
        dots.push(
            <div
                key={i} 
                onClick={() => changeState(i)} 
                style={newVertical ? {} : horizontal}>
                <FontAwesomeIcon 
                    icon={faCircle} 
                    className="kebab-icon"
                    style={{...iconStyle, ...(newSelIndex === i ? selectedColor : unselectedColor)}}/>
            </div>
        )
    }

    return (
        <div className={className}>
            {dots}
        </div>
    );
};

export default Kebab;