import './ReactPage.css';
import React from 'react';
import Experience from '../../components/experience/Experience';


const ReactPage = ({className}) => {
  return (
    <div className={className}>
      <h1 className="title">Projects</h1>
      <div className="work-experience">
        <Experience 
          iconUrl="ThermoFisherLogo_64.png"
          title="Front End Web Developer"
          company="Myself"
          fromYear="2020">
          <p className="work-experience-title">This Website!</p>
          <p className="work-experience-description">Simplistic portfolio website used for consolidating all of my skills onto a single platform.</p>
          <ul className="work-experience-list">
            <li>Designed and developed portfolio website from scratch.</li>
            <li>Developed over the course of a few days with no prior knowledge or experience with ReactJS.</li>
          </ul>
        </Experience>
      </div>
    </div>
  );
};

export default ReactPage;