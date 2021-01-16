import './Home.css';
import React, { useState } from 'react';
import OverviewPage from '../pages/overview-page/OverviewPage';
import CPPCSDotNetPage from '../pages/cpp-cs-dotnet-page/CPPCSDotNetPage';
import NodeJSExpressPage from '../pages/nodejs-express-page/NodeJSExpressPage';
import AngularPage from '../pages/angular-page/AngularPage';
import ReactPage from '../pages/react-page/ReactPage';
import Sidebar from '../components/sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { usePrevious } from '../shared/shared';


const PageState = Object.freeze({"overview": 0, "cpp_cs_dotnet": 1, "nodejs_express": 2, "angularjs": 3, "react": 4});

const Home = () => {
    const [pageState, setPageState] = useState(PageState.overview);
    const [hideSidebar, setHideSidebar] = useState(false);

    const previousPageState = usePrevious(pageState);

    /**
     * Handle rendering new page according to page state
     * @param {PageState} state state of the Home component
     */
    const renderPage = (state) => {
        let transition = '';
        if (!isMobile)
            transition = state < previousPageState ? "animateTransitionDown" : "animateTransitionUp";
        
        return (
            state === PageState.overview ? <div key={state} className={transition}><OverviewPage/></div> :
            state === PageState.cpp_cs_dotnet ? <div key={state} className={transition}><CPPCSDotNetPage/></div>:
            state === PageState.nodejs_express ? <div key={state} className={transition}><NodeJSExpressPage/></div> :
            state === PageState.angularjs ? <div key={state} className={transition}><AngularPage/></div> : 
            state === PageState.react ? <div key={state} className={transition}><ReactPage/></div>: <div/>
        );
    };

    /**
     * Change the state of the Home component
     * @param {PageState} state new state for the Home component 
     */
    const changeState = (state) => {
        if (!isNaN(state)) {
            setPageState(state);

            // For mobile, we hide the sidebar when opening a page
            if (isMobile)
                setHideSidebar(true);
        }
    }

    /** Show the sidebar */
    const showSidebar = () => {
        setHideSidebar(false);
    }
    
    // Profile information
    const profile = {
        name: process.env.REACT_APP_PROFILE_NAME,
        linkedin: process.env.REACT_APP_LINKEDIN_URL,
        github: process.env.REACT_APP_GIT_URL,
        email: process.env.REACT_APP_EMAIL_ADDRESS
    }

    // 850px matches the media query in Home.css
    const isMobile = useMediaQuery({ query: `(max-width: 850px)`});
    const currentPage = pageState;

    return (
        <div>
            {(isMobile && hideSidebar) &&
                <div className="back-button" onClick={showSidebar}>
                    <FontAwesomeIcon icon={faChevronLeft} size="3x"/>
                </div>
            }
            <Sidebar profile={profile} className="dissapear" hide={hideSidebar && isMobile}>
                <button 
                    className="sidebar-item" 
                    onClick={() => changeState(PageState.overview)}>Overview</button>
                <button 
                    className="sidebar-item" 
                    onClick={() => changeState(PageState.cpp_cs_dotnet)}>C#/C++ .Net Framework</button>
                <button 
                    className="sidebar-item" 
                    onClick={() => changeState(PageState.nodejs_express)}><FontAwesomeIcon icon={faNodeJs}/> NodeJS + Express</button>
                <button 
                    className="sidebar-item"
                    onClick={() => changeState(PageState.angularjs)}><FontAwesomeIcon icon={faAngular}/> Angular</button>
                <button 
                    className="sidebar-item"
                    onClick={() => changeState(PageState.react)}><FontAwesomeIcon icon={faReact}/> React</button>
            </Sidebar>
            <div className='main'> 
                {renderPage(currentPage)}
            </div>
        </div>
    );

};

export default Home;