import './Home.css';
import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'

class Home extends React.Component {
    render() {
        return (
            <Sidebar profile={null}>
                <button className="sidebar-item">Overview</button>
                <button href="/" className="sidebar-item">C#/C++ .Net Framework</button>
                <button href="/" className="sidebar-item"><FontAwesomeIcon icon={faNodeJs}/> NodeJS + Express</button>
                <button href="/" className="sidebar-item"><FontAwesomeIcon icon={faAngular}/> Angular</button>
                <button href="/" className="sidebar-item"><FontAwesomeIcon icon={faReact}/> React</button>
            </Sidebar>
        );
    }
};

export default Home;