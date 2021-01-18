import './AngularPage.css';
import React from 'react';
import Experience from '../../components/experience/Experience';
import Carousel from '../../components/carousel/Carousel';


const AngularPage = ({className}) => {
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
              <li>Streamlined multiple time consuming tasks such as building installers, comparing changes between builds, and creating installers for feature branches.</li>
              <li>Front-end developed using AngularJS, web API back-end developed using NodeJS with ExpressJS.</li>
            </ul>
          </Experience>
        </div>
      </div>

      <div>
        <h1 className="title">Projects</h1>
        <div className="work-experience">
          <Experience 
            iconUrl="Logo64.png"
            title="Full Stack Developer"
            company="Myself"
            fromYear="2020"
            toYear="Present">
            <p className="work-experience-title">FinanceJS Project</p>
            <p className="work-experience-description">Simple web application used for estimating bank account balances after recurring transactions.</p>
            <ul className="work-experience-list">
              <li>Side project developed to practice AngularJS web development using client side storage.</li>
              <li>Used IndexedDB for client side database storage.</li>
            </ul>
            <br/>
            <a 
              href={`${process.env.REACT_APP_FINANCE_JS_LINK}`}
              target="_blank"
              rel="noreferrer">Link to FinanceJS</a>
          </Experience>
          <Experience 
              iconUrl="SwimClubLogo_64.png"
              title="Full Stack Developer"
              company="Saratoga Swim Club (non-profit)"
              fromYear="2020"
              toYear="">
              <p className="work-experience-title">Reservation System</p>
              <p className="work-experience-description">Simple calendar reservation system for managing swim club member pool times during COVID-19 government mandated safety regulations.</p>
              <ul className="work-experience-list">
                <li>Single handedely designed, tested, developed and deployed web application in 2 week time frame before pool club opening.</li>
                <li>Created user friendly, simplistic reservation system used by people of all ages.</li>
                <li>Automates time-consuming manual process of creating pool reservations which exceed 700+ reservations per week.</li>
                <li>Serves 40+ pool club families who can securely login, make and edit reservations.</li>
                <li>Front-end developed using AngularJS, web API back-end developed using NodeJS with ExpressJS.</li>
              </ul>
              <br/>
              <p className="work-experience-challenges">Challenges</p>
              <p className="work-experience-problem-solution">Problem</p>
              <p className="work-experience-description">
                I originally tried hosting the reservation system as an embedded calendar in the swim club's existing Google Site, but embeds show up as a different origin address; this caused requests to the server to show up as cross-origin, so users with cautious cookie settings were experiencing issues.
              </p>
              <p className="work-experience-problem-solution">Solution</p>
              <p className="work-experience-description">
                Instead of forcing users to change their browser cookie settings, I created a separate parallel website using the same domain which served the specific purpose of making reservations.
              </p>
            </Experience>
        </div>
      </div>
    </Carousel>
  );
};

export default AngularPage;