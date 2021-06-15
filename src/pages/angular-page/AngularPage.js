import './AngularPage.css';
import React from 'react';
import Experience from '../../components/experience/Experience';
import Carousel from '../../components/carousel/Carousel';


const AngularPage = ({className}) => {
  
  const softwareBuilder = {
    iconUrl: "ThermoFisherLogo_64.png",
    title: "Software Engineer II",
    company: "ThermoFisher Scientific",
    fromYear: "2018",
    toYear: "Present",
    projectName: "Application Builder",
    projectDescription: "User friendly web application which allows all users to easily create new application builds",
    skillsList: ["AngularJS", "HTML5", "CSS3", "TypeScript", "NodeJS", "ExpressJS", "JavaScript", "MongoDB"],
    accomplishmentsList: [
      "Single handedely designed, tested and developed software building web application during spare time with ThermoFisher Scientific",
      "Created simplistic web interface which is used by all engineers on a daily basis"
    ]
  }

  const reservationSystem = {
    iconUrl: "SwimClubLogo_64.png",
    title: "Full Stack Developer",
    company: "Saratoga Swim Club (non-profit)",
    fromYear: "2020",
    toYear: "",
    projectName: "Reservation System",
    projectDescription: "Reservation system for swim club members during COVID-19 government mandated safety regulations",
    skillsList: ["AngularJS", "HTML5", "CSS3", "TypeScript", "NodeJS", "ExpressJS", "JavaScript", "Google Sheets API"],
    accomplishmentsList: [
      "Single handedely designed, tested, developed and deployed web application in 2 week time frame before pool club opening",
      "Automated time-consuming manual process of creating pool reservations which exceeded 700+ reservations per week",
      "User interface served over 40+ families with people of all ages",
      "Hosted server on Raspberry Pi through saratogaswimclub domain to avoid expensive cloud server costs"
    ]
  }

  const financeJS = {
    iconUrl: "Logo64.png",
    title: "Full Stack Developer",
    company: "Myself",
    fromYear: "2020",
    toYear: "",
    projectName: "FinanceJS Project",
    projectDescription: "Simple web application used for estimating bank account balances after recurring transactions",
    skillsList: ["AngularJS", "HTML5", "CSS3", "TypeScript", "IndexedDB"],
    accomplishmentsList: [
      "Developed a One-Tier client application used for quickly estimating income-to-expenses ratio",
      "Built using front-end storage so no private information is necessary for application use"
    ]
  }

  return (
    <Carousel className={className} vertical={false}>
      <div>
        <h1 className="title">Work Experience</h1>
        <div className="work-experience">
          <Experience 
              iconUrl={softwareBuilder.iconUrl}
              title={softwareBuilder.title}
              company={softwareBuilder.company}
              fromYear={softwareBuilder.fromYear}
              toYear={softwareBuilder.toYear}
              projectName={softwareBuilder.projectName}
              projectDescription={softwareBuilder.projectDescription}
              skillsList={softwareBuilder.skillsList}
              accomplishmentsList={softwareBuilder.accomplishmentsList}>
            <ul className="work-experience-list">
              <li>Eliminated multiple time consuming tasks, including:
                <ul>
                  <li>Creating and downloading builds</li>
                  <li>Comparing changes between software builds for release notes</li>
                  <li>Generating feature branches for development and engineering use cases</li>
                </ul>
              </li>
            </ul>
          </Experience>
        </div>
      </div>
      <div>
        <h1 className="title">Projects</h1>
        <div className="work-experience">
          <Experience 
              iconUrl={reservationSystem.iconUrl}
              title={reservationSystem.title}
              company={reservationSystem.company}
              fromYear={reservationSystem.fromYear}
              toYear={reservationSystem.toYear}
              projectName={reservationSystem.projectName}
              projectDescription={reservationSystem.projectDescription}
              skillsList={reservationSystem.skillsList}
              accomplishmentsList={reservationSystem.accomplishmentsList}>
          </Experience>
          <Experience 
              iconUrl={financeJS.iconUrl}
              title={financeJS.title}
              company={financeJS.company}
              fromYear={financeJS.fromYear}
              toYear={financeJS.toYear}
              projectName={financeJS.projectName}
              projectDescription={financeJS.projectDescription}
              skillsList={financeJS.skillsList}
              accomplishmentsList={financeJS.accomplishmentsList}>
              <ul className="work-experience-list">
                <li>
                  <a 
                    href={`${process.env.REACT_APP_FINANCE_JS_LINK}`}
                    target="_blank"
                    rel="noreferrer"
                    className="link">Link to FinanceJS</a>
                </li>
              </ul>
          </Experience>
        </div>
      </div>
    </Carousel>
  );
};

export default AngularPage;