import './Carousel.css';
import React, { Children, useState } from 'react';
import { usePrevious } from '../../shared/shared';
import Kebab from '../kebab/Kebab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


const Carousel = ({vertical, children}) => {
    const [pageIndex, setPageIndex] = useState(0);

    const pageCount = Children.count(children);
    const newVertical = vertical ? true : false;
    const newChildren = children ? children : [];
    
    const previousPageIndex = usePrevious(pageIndex);

    const currentPageIndex = pageIndex;

    const kebabClick = (index) => {
        setPageIndex(index);
    }

    const renderUpArrow = (currentIndex) => {
        return (
            currentIndex > 0 ?
            <button 
                className="carousel-up-arrow carousel-chevron"
                onClick={() => setPageIndex(currentIndex-1)}>
                <FontAwesomeIcon icon={faChevronUp}/>
            </button> : <div/>
        )
    }

    const renderDownArrow = (currentIndex) => {
        return (
            currentIndex < pageCount - 1 ?
                <button 
                    className={"carousel-down-arrow carousel-chevron"}
                    onClick={() => setPageIndex(currentIndex+1)}>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </button> : <div/>
        )
    }

    const renderPage = (currentIndex) => {
        const transition = currentIndex < previousPageIndex ? "animateTransitionDown" : "animateTransitionUp";
        
        return newChildren.map(
            (child, index) => (
                index === currentIndex ?
                    <div
                        key={index} 
                        className={transition}>{child}
                    </div> : <div key={index}/>
            )
        );
    }

    return (
        <div>
            <div className="carousel-kebab-container">
                <Kebab 
                    count={pageCount}
                    vertical={newVertical}
                    kebabClick={kebabClick}
                    selIndex={currentPageIndex} />
            </div>
            <div>
                {renderUpArrow(currentPageIndex)}
            </div>
            <div>
                {renderDownArrow(currentPageIndex)}
            </div>
            <div>
                {renderPage(currentPageIndex)}
            </div>
        </div>
    );
};

export default Carousel;