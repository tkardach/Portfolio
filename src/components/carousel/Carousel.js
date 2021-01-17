import './Carousel.css';
import React, { Children, useState } from 'react';
import { usePrevious } from '../../shared/shared';
import Kebab from '../kebab/Kebab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Carousel = ({className, vertical, children}) => {
    const [pageIndex, setPageIndex] = useState(0);

    const pageCount = Children.count(children);
    const newVertical = vertical ? true : false;
    const newChildren = children ? children : [];
    const newKebabClass = newVertical ? "carousel-kebab-container-vertical" : "carousel-kebab-container-horizontal"
    
    const previousPageIndex = usePrevious(pageIndex);

    const currentPageIndex = pageIndex;

    const kebabClick = (index) => {
        setPageIndex(index);
    }

    const renderBackArrow = (currentIndex) => {
        const carouselClass = newVertical ? "carousel-up-arrow" : "carousel-left-arrow";
        const chevron = newVertical ? faChevronUp : faChevronLeft;

        return (
            currentIndex > 0 ?
            <button 
                className={`${carouselClass} carousel-chevron`}
                onClick={() => setPageIndex(currentIndex-1)}>
                <FontAwesomeIcon icon={chevron}/>
            </button> : <div/>
        )
    }

    const renderForwardArrow = (currentIndex) => {
        const carouselClass = newVertical ? "carousel-down-arrow" : "carousel-right-arrow";
        const chevron = newVertical ? faChevronDown : faChevronRight;

        return (
            currentIndex < pageCount - 1 ?
                <button 
                    className={`${carouselClass} carousel-chevron`}
                    onClick={() => setPageIndex(currentIndex+1)}>
                    <FontAwesomeIcon icon={chevron}/>
                </button> : <div/>
        )
    }

    const renderPage = (currentIndex) => {
        const transition = 
            previousPageIndex !== undefined ?
            (newVertical ? 
                currentIndex < previousPageIndex ? "animateTransitionDown" : "animateTransitionUp" :
                currentIndex < previousPageIndex ? "animateTransitionLeft" : "animateTransitionRight") : "";
        
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
        <div className={className}>
            {renderBackArrow(currentPageIndex)}
            {renderForwardArrow(currentPageIndex)}
            <div className="carousel-content">
                {renderPage(currentPageIndex)}
                <Kebab 
                    className={newKebabClass}
                    count={pageCount}
                    vertical={newVertical}
                    kebabClick={kebabClick}
                    selIndex={currentPageIndex} />
            </div>
        </div>
    );
};

export default Carousel;