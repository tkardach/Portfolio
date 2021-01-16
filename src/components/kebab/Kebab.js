import './Kebab.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


const Kebab = ({count, vertical, size, color, selColor, kebabClick}) => {
    const [kebabIndex, setKebabIndex] = useState(0);

    const newSize = size ? size : '16px';
    const newCount = count ? count : 3;
    const newVertical = vertical ? true : false;
    const newColor = color ? color : 'white';
    const newSelColor = selColor ? selColor : 'gray';
    const newKebabClick = kebabClick ? kebabClick : (index) => {};

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
            setKebabIndex(index);
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
                    style={{...iconStyle, ...(kebabIndex === i ? selectedColor : unselectedColor)}}/>
            </div>
        )
    }

    return (
        <div>
            {dots}
        </div>
    );
};

export default Kebab;