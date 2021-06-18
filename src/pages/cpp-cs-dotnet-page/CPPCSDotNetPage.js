import './CPPCSDotNetPage.css';
import React from 'react';
import Experience from '../../components/experience/Experience';
import Carousel from '../../components/carousel/Carousel';


const CPPCSDotNetPage = ({className, goToAngularPage, goToNodePage}) => {
  const goToAngularPageFunc = goToAngularPage && typeof goToAngularPage === 'function' ? goToAngularPage : () => {};
  const goToNodePageFunc = goToNodePage && typeof goToNodePage === 'function' ? goToNodePage : () => {};


  const legacyCircuitEdit = {
    iconUrl: "ThermoFisherLogo_64.png",
    title: "Software Engineer II",
    company: "ThermoFisher Scientific",
    fromYear: "2017",
    toYear: "Present",
    projectName: "Legacy Circuit Edit Software",
    projectDescription: "Windows application used to control an advanced Focused Ion Beam used for circuit edit",
    skillsList: ["C#", "C++", ".Net", "WinForms", "WPF", "PostgreSQL", "COM", "Git", "Scrum", "JIRA"],
    accomplishmentsList: [
      "Migrated codebase from 32-bit to 64-bit",
      "Moved all post-processing effects onto GPU using DirectX pixel shaders, significantly increasing processing and imaging efficiency",
      "Enabled bilinear interpolation of scanning images through fundamental codebase changes"
    ]
  }

  const newCircuitEdit = {
    iconUrl: "ThermoFisherLogo_64.png",
    title: "Software Engineer II",
    company: "ThermoFisher Scientific",
    fromYear: "2020",
    toYear: "Present",
    projectName: "New Circuit Edit Software",
    projectDescription: "Windows application used to control an advanced Focused Ion Beam used for circuit edit",
    skillsList: ["C#", "C++", ".Net", "WPF", "COM", "Windows Registry", "Git", "Scrum", "JIRA"],
    accomplishmentsList: [
      "Fixed several complex bugs on an extremely large codebase (1M+ lines of code) which supports hundreds of different hardware configurations",
      "Worked with teams across the nation and globe to implement features that span multiple projects",
      "Developed standard PID controller for maintaining gas injection pressure",
    ]
  }

  const cadSoftware = {
    iconUrl: "ThermoFisherLogo_64.png",
    title: "Software Engineer II",
    company: "ThermoFisher Scientific",
    fromYear: "2018",
    toYear: "2019",
    projectName: "CAD Software for Electron Microscopy",
    projectDescription: "Windows/Linux application used for navigating microscope devices using CAD schematic as reference",
    skillsList: ["C++", "Qt", "TCP/IP", "WiX", "Git", "Scrum", "JIRA"],
    accomplishmentsList: [
      "Developed mock hardware interface that allows software to be tested without needing physical endpoint",
      "Created a service and application used for translating requests from RPC to TCP/IP necessary for microscope/CAD communication",
      "Created installer for Windows version of software using WiX"
    ]
  }

  const garageDoorOpener = { 
    iconUrl: "Logo64.png",
    title: "Full Stack Developer",
    company: "Myself",
    fromYear: "2020",
    toYear: "",
    projectName: "Garage Door Opener",
    projectDescription: "Converted a standard garage door into a WiFi controllable garage door",
    skillsList: ["C++", "AWS Lambda", "Swift", "SwiftUI", "Microcontrollers", "Particle IO"],
    accomplishmentsList: [
      "Developed IOS application that controls a standard, non-WiFi enabled garage door",
      "Included support with Amazon's Alexa for voice controllability"
    ]
  }

  const deadMansSwitch = {
    iconUrl: "Logo64.png",
    title: "Software/Hardware Developer",
    company: "Myself",
    fromYear: "2020",
    toYear: "",
    projectName: "Dead Man's Switch",
    projectDescription: "Smart power outlet that power cycles itself when connection to WiFi is lost",
    skillsList: ["C++", "Microcontrollers", "Circuit Design", "Particle IO"],
    accomplishmentsList: [
      "Created solution to maintain smart home features of remote cabin when router needs to be power cycled"
    ]
  }

  return (
      <Carousel className={className} vertical={false}>
        <div>
          <h1 className="title">Work Experience</h1>
          <div className="work-experience">
            <Experience 
              iconUrl={newCircuitEdit.iconUrl}
              title={newCircuitEdit.title}
              company={newCircuitEdit.company}
              fromYear={newCircuitEdit.fromYear}
              toYear={newCircuitEdit.toYear}
              projectName={newCircuitEdit.projectName}
              projectDescription={newCircuitEdit.projectDescription}
              skillsList={newCircuitEdit.skillsList}
              accomplishmentsList={newCircuitEdit.accomplishmentsList}>
            </Experience>
            <Experience
              iconUrl={legacyCircuitEdit.iconUrl}
              title={legacyCircuitEdit.title}
              company={legacyCircuitEdit.company}
              fromYear={legacyCircuitEdit.fromYear}
              toYear={legacyCircuitEdit.toYear}
              projectName={legacyCircuitEdit.projectName}
              projectDescription={legacyCircuitEdit.projectDescription}
              skillsList={legacyCircuitEdit.skillsList}
              accomplishmentsList={legacyCircuitEdit.accomplishmentsList}>
              <ul className="work-experience-list">
                <li>
                  Refactored codebase to accommodate new scan board: 
                  <ul>
                    <li>Added features for drawing complex shapes</li>
                    <li>Generated matrix transformations necessary for converting between hardware and software coordinate systems</li>
                    <li>Modified raster scans to increase scan accuracy and even scan distribution</li>
                  </ul>
                </li>
                <li>
                  Significantly increased team productivity, efficiency, and time by creating a software builder web interface
                  (See <span className="link" onClick={goToAngularPageFunc}>AngularJS</span> and <span className="link" onClick={goToNodePageFunc}>NodeJS</span> sections for more information)</li>
              </ul>
            </Experience>
            <Experience 
              iconUrl={cadSoftware.iconUrl}
              title={cadSoftware.title}
              company={cadSoftware.company}
              fromYear={cadSoftware.fromYear}
              toYear={cadSoftware.toYear}
              projectName={cadSoftware.projectName}
              projectDescription={cadSoftware.projectDescription}
              skillsList={cadSoftware.skillsList}
              accomplishmentsList={cadSoftware.accomplishmentsList}>
            </Experience>
          </div>
        </div>
        <div>
          <h1 className="title">Projects</h1>
          <div className="work-experience">
            <Experience 
              iconUrl={garageDoorOpener.iconUrl}
              title={garageDoorOpener.title}
              company={garageDoorOpener.company}
              fromYear={garageDoorOpener.fromYear}
              toYear={garageDoorOpener.toYear}
              projectName={garageDoorOpener.projectName}
              projectDescription={garageDoorOpener.projectDescription}
              skillsList={garageDoorOpener.skillsList}
              accomplishmentsList={garageDoorOpener.accomplishmentsList}>
            </Experience>
            <Experience 
              iconUrl={deadMansSwitch.iconUrl}
              title={deadMansSwitch.title}
              company={deadMansSwitch.company}
              fromYear={deadMansSwitch.fromYear}
              toYear={deadMansSwitch.toYear}
              projectName={deadMansSwitch.projectName}
              projectDescription={deadMansSwitch.projectDescription}
              skillsList={deadMansSwitch.skillsList}
              accomplishmentsList={deadMansSwitch.accomplishmentsList}>
            </Experience>
          </div>
        </div>
      </Carousel>
  );
};

export default CPPCSDotNetPage;