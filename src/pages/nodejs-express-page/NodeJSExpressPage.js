import './NodeJSExpressPage.css';
import React from 'react';
import Experience from '../../components/experience/Experience';
import Carousel from '../../components/carousel/Carousel';


const NodeJSExpressPage = ({className}) => {
  
  const softwareBuilder = {
    iconUrl: "ThermoFisherLogo_64.png",
    title: "Software Engineer II",
    company: "ThermoFisher Scientific",
    fromYear: "2018",
    toYear: "Present",
    projectName: "Application Builder",
    projectDescription: "User friendly web application so all users could easily create new application builds",
    skillsList: ["NodeJS", "ExpressJS", "JavaScript", "MongoDB", "TDD", "AngularJS", "HTML5", "CSS3", "TypeScript"],
    accomplishmentsList: [
      "Single handedely designed, tested and developed this web application during spare time with ThermoFisher Scientific",
      "Created JavaScript wrapper over git commands for managing source code and comparing commits between builds",
      "Wrapped existing software build CLI in JavaScript, necessary for synchronizing Node server with build script state",
      "Streamlined multiple time consuming manual tasks that increased software team efficiency and productivity"
    ]
  }

  const reservationSystem = {
    iconUrl: "SwimClubLogo_64.png",
    title: "Full Stack Developer",
    company: "Saratoga Swim Club (non-profit)",
    fromYear: "2020",
    toYear: "",
    projectName: "Reservation System",
    projectDescription: "Simple calendar reservation system for managing swim club member pool times during COVID-19 government mandated safety regulations",
    skillsList: ["NodeJS", "ExpressJS", "Google Sheets API", "AngularJS", "HTML5", "CSS3", "TypeScript"],
    accomplishmentsList: [
      "Single handedely designed, tested, developed and deployed web application in 2 week time frame before pool club opening",
      "Automated time-consuming manual process of creating pool reservations which exceeded 700+ reservations per week",
      "Implemented secure user login, account creation, and password recovery",
      "Address CORS issue preventing user login by hosting reservation system on parallel website under the same domain from my Raspberry Pi"
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
          </div>
      </div>
    </Carousel>
  );
};

export default NodeJSExpressPage;