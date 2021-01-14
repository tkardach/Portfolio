import './Home.css';
import React from 'react';
import OverviewPage from '../overview-page/OverviewPage';
import CPPCSDotNetPage from '../cpp-cs-dotnet-page/CPPCSDotNetPage';
import NodeJSExpressPage from '../nodejs-express-page/NodeJSExpressPage';
import AngularPage from '../angular-page/AngularPage';
import ReactPage from '../react-page/ReactPage';
import Sidebar from '../../components/sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'

const PageState = Object.freeze({"overview": 0, "cpp_cs_dotnet": 1, "nodejs_express": 2, "angularjs": 3, "react": 4});

const renderPage = (state) => (
    state === PageState.overview ? <OverviewPage/> :
    state === PageState.cpp_cs_dotnet ? <CPPCSDotNetPage/> :
    state === PageState.nodejs_express ? <NodeJSExpressPage/> :
    state === PageState.angularjs ? <AngularPage/> : 
    state === PageState.react ? <ReactPage/> : <div/>
);

class Home extends React.Component {
    constructor() {
        super();

        this.profile = {
            name: "Bubba Sparks",
            linkedin: "#",
            github: "#",
            email: "#"
        }

        this.state = {
            pageState: PageState.overview
        }
    }

    changeState(state) {
        if (!isNaN(state)) {
            this.setState({pageState: state});
        }
    }

    render() {
        const currentPage = this.state.pageState;
        const profile = this.profile;

        return (
            <div>
                <Sidebar profile={profile}>
                    <button 
                        className="sidebar-item" 
                        onClick={() => this.changeState(PageState.overview)}>Overview</button>
                    <button 
                        className="sidebar-item" 
                        onClick={() => this.changeState(PageState.cpp_cs_dotnet)}>C#/C++ .Net Framework</button>
                    <button 
                        className="sidebar-item" 
                        onClick={() => this.changeState(PageState.nodejs_express)}><FontAwesomeIcon icon={faNodeJs}/> NodeJS + Express</button>
                    <button 
                        className="sidebar-item"
                        onClick={() => this.changeState(PageState.angularjs)}><FontAwesomeIcon icon={faAngular}/> Angular</button>
                    <button 
                        className="sidebar-item"
                        onClick={() => this.changeState(PageState.react)}><FontAwesomeIcon icon={faReact}/> React</button>
                </Sidebar>
                <div className="main"> 
                    {renderPage(currentPage)}
                </div>
            </div>
        );
    }
};

export default Home;