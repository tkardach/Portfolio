import './Home.css';
import React, { useState } from 'react';
import OverviewPage from '../overview-page/OverviewPage';
import CPPCSDotNetPage from '../cpp-cs-dotnet-page/CPPCSDotNetPage';
import NodeJSExpressPage from '../nodejs-express-page/NodeJSExpressPage';
import AngularPage from '../angular-page/AngularPage';
import ReactPage from '../react-page/ReactPage';
import Sidebar from '../../components/sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive';


const PageState = Object.freeze({"overview": 0, "cpp_cs_dotnet": 1, "nodejs_express": 2, "angularjs": 3, "react": 4});

const renderPage = (state) => (
    state === PageState.overview ? <OverviewPage/> :
    state === PageState.cpp_cs_dotnet ? <CPPCSDotNetPage/> :
    state === PageState.nodejs_express ? <NodeJSExpressPage/> :
    state === PageState.angularjs ? <AngularPage/> : 
    state === PageState.react ? <ReactPage/> : <div/>
);

const Home = () => {
    const [pageState, setPageState] = useState(PageState.overview);
    const [hideSidebar, setHideSidebar] = useState(false);


    const changeState = (state) => {
        if (!isNaN(state)) {
            setPageState(state);

            if (isMobile)
                setHideSidebar(true);
        }
    }

    const showSidebar = () => {
        setHideSidebar(false);
    }
    
    const profile = {
        name: "Bubba Sparks",
        linkedin: "#",
        github: "#",
        email: "#"
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