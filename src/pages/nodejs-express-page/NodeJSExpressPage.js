import './NodeJSExpressPage.css';
import React from 'react';
import Experience from '../../components/experience/Experience';
import Carousel from '../../components/carousel/Carousel';


const NodeJSExpressPage = ({className}) => {
  return (
    <Carousel className={className} vertical={false}>
      <div>
        <h1 className="title">Work Experience</h1>
        <div className="work-experience">
          <Experience 
            iconUrl="ThermoFisherLogo_64.png"
            title="Software Engineer II"
            company="ThermoFisher Scientific"
            fromYear="2018"
            toYear="Present">
            <p className="work-experience-title">Application Builder</p>
            <p className="work-experience-description">User friendly web application so non-software engineer users could easily create new application builds.</p>
            <ul className="work-experience-list">
              <li>Single handedely designed, tested and developed web application during spare time with ThermoFisher Scientific.</li>
              <li>Saves 20 minutes per application build through automated process.</li>
              <li>Streamlined multiple time consuming tasks such as building installers, comparing changes between builds, and creating installers for feature branches.</li>
              <li>Web API developed using NodeJS with ExpressJS, front-end developed using AngularJS.</li>
            </ul>
            <br/>
            <p className="work-experience-challenges">Challenges</p>
            <p className="work-experience-problem-solution">Problem</p>
            <p className="work-experience-problem-solution-answer">
              
            </p>
            <p className="work-experience-problem-solution">Solution</p>
            <p className="work-experience-problem-solution-answer">
              Instead of rewriting the build script using a more NodeJS friendly system, I made minor 
            </p>
          </Experience>
        </div>
      </div>
      <div>
        <h1 className="title">Projects</h1>
        <div className="work-experience">
          <Experience 
              iconUrl="SwimClubLogo_64.png"
              title="Full Stack Developer"
              company="Saratoga Swim Club (non-profit)"
              fromYear="2020"
              toYear="">
              <p className="work-experience-title">Reservation System</p>
              <p className="work-experience-description">Simple calendar reservation system for managing swim club member pool times during COVID-19 government mandated safety regulations.</p>
              <ul>
                <li>Served 40+ pool club families who could securely login, make and edit reservations.</li>
                <li>Web API developed using NodeJS with ExpressJS, front-end developed using AngularJS.</li>
                <li>Server hosted from Rasbperry Pi using Ubuntu Server OS.</li>
              </ul>
              <p className="work-experience-challenges">Accomplishments</p>
              <ul className="work-experience-list">
                <li>Single handedely designed, tested, developed and deployed web application in 2 week time frame before pool club opening.</li>
                <li>Automated time-consuming manual process of creating pool reservations which exceeded 700+ reservations per week.</li>
              </ul>
              <p className="work-experience-challenges">Challenges</p>
              <p className="work-experience-problem-solution">Problem</p>
              <p className="work-experience-problem-solution-answer">
                I originally tried hosting the reservation system as an embedded calendar in the swim club's existing Google Site, but embeds show up as a different origin address; this caused requests to the server to show up as cross-origin, so users with cautious cookie settings were experiencing issues.
              </p>
              <p className="work-experience-problem-solution">Solution</p>
              <p className="work-experience-problem-solution-answer">
                Instead of forcing users to change their browser cookie settings, I created a separate parallel website using the same domain which served the specific purpose of making reservations.
              </p>
            </Experience>
          </div>
      </div>
    </Carousel>
  );
};

export default NodeJSExpressPage;