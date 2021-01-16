import './Carousel.css';
import React, { Children, useState } from 'react';
import { usePrevious } from '../../shared/shared';

import Kebab from '../kebab/Kebab';


const Carousel = ({vertical, children}) => {
    const [pageIndex, setPageIndex] = useState(0);

    const pageCount = Children.count(children);
    const newVertical = vertical ? true : false;
    const newChildren = children ? children : [];
    
    const previousPageIndex = usePrevious(pageIndex);

    const currentPageIndex = pageIndex;

    const kebabClick = (index) => {
        console.log(index);
        setPageIndex(index);
    }

    const renderPage = (state) => {
        const transition = state < previousPageIndex ? "animateTransitionDown" : "animateTransitionUp";
        
        return newChildren.map(
            (child, index) => (
                index === state ?
                    <div key={state} className={transition}>{child}</div> : <div key={state}/>
            )
        );
    }

    return (
        <div>
            <div>
                <Kebab 
                    count={pageCount}
                    vertical={newVertical}
                    kebabClick={kebabClick} />
            </div>
            <div>
                {renderPage(currentPageIndex)}
            </div>
        </div>
    );
};

export default Carousel;