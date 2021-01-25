import './Home.css';
import React, { useState } from 'react';
import OverviewPage from '../pages/overview-page/OverviewPage';
import CPPCSDotNetPage from '../pages/cpp-cs-dotnet-page/CPPCSDotNetPage';
import NodeJSExpressPage from '../pages/nodejs-express-page/NodeJSExpressPage';
import AngularPage from '../pages/angular-page/AngularPage';
import ReactPage from '../pages/react-page/ReactPage';
import AboutPage from '../pages/about-page/AboutPage';
import Sidebar from '../components/sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { usePrevious } from '../shared/shared';


const PageState = Object.freeze({"overview": 0, "cpp_cs_dotnet": 1, "nodejs_express": 2, "angularjs": 3, "react": 4, "about": 5});

const Home = ({className}) => {
    const [pageState, setPageState] = useState(PageState.overview);
    const [hideSidebar, setHideSidebar] = useState(false);

    const previousPageState = usePrevious(pageState);

    /**
     * Handle rendering new page according to page state
     * @param {PageState} state state of the Home component
     */
    const renderPage = (state) => {
        let transition = 'no-animation';
        if (!isMobile)
            transition = state < previousPageState ? 'animateTransitionDown' : 'animateTransitionUp';
        
        // Unhighlight all buttons
        const elems = document.getElementsByClassName('active');
        [].forEach.call(elems, function (el) {
            el.classList.remove('active')
        })

        const button = document.getElementById(
            state === PageState.cpp_cs_dotnet ? 'cppdnet-button':
            state === PageState.nodejs_express ? 'nodejs-button' :
            state === PageState.angularjs ? 'angular-button' : 
            state === PageState.react ? 'react-button' : 
            state === PageState.about ? 'about-button' : 'overview-button'
        );

        // Hightlight the active button
        if (button) {
            button.classList.remove('active');
            button.classList.add('active');
        }
        
        // Render the page based on the current state
        return (
            state === PageState.overview ? <OverviewPage key={state} className={transition}/> :
            state === PageState.cpp_cs_dotnet ? 
                <CPPCSDotNetPage 
                    key={state} 
                    className={transition} 
                    goToAngularPage={() => {changeState(PageState.angularjs)}}
                    goToNodePage={() => {changeState(PageState.nodejs_express)}}/> :
            state === PageState.nodejs_express ? <NodeJSExpressPage key={state} className={transition}/> :
            state === PageState.angularjs ? <AngularPage key={state} className={transition}/> : 
            state === PageState.react ? <ReactPage key={state} className={transition}/> : 
            state === PageState.about ? <AboutPage key={state} className={transition}/> : <div/>
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
        <div className={className}>
            {(isMobile && hideSidebar) &&
                <div className="back-button" onClick={showSidebar}>
                    <FontAwesomeIcon icon={faChevronLeft} size="3x"/>
                </div>
            }
            <Sidebar profile={profile} className="dissapear" hide={hideSidebar && isMobile}>
                <button 
                    id="overview-button"
                    className="sidebar-item active" 
                    onClick={() => changeState(PageState.overview)}>Overview</button>
                <button 
                    id="cppdnet-button"
                    className="sidebar-item" 
                    onClick={() => changeState(PageState.cpp_cs_dotnet)}>C++/C# .Net Framework</button>
                <button 
                    id="nodejs-button"
                    className="sidebar-item" 
                    onClick={() => changeState(PageState.nodejs_express)}><FontAwesomeIcon icon={faNodeJs}/> NodeJS + Express</button>
                <button 
                    id="angular-button"
                    className="sidebar-item"
                    onClick={() => changeState(PageState.angularjs)}><FontAwesomeIcon icon={faAngular}/> Angular</button>
                <button 
                    id="react-button"
                    className="sidebar-item"
                    onClick={() => changeState(PageState.react)}><FontAwesomeIcon icon={faReact}/> React</button>
                <button 
                    id="about-button"
                    className="sidebar-item"
                    onClick={() => changeState(PageState.about)}>About</button>
            </Sidebar>
            <div className="main"> 
                {renderPage(currentPage)}
            </div>
        </div>
    );

};

export default Home;