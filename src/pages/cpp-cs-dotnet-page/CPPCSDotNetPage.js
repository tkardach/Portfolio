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
    skillsList: ["C#", "C++", ".Net", "WinForms", "WPF", "PostgreSQL", "COM", "Git", "Scrum"],
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
    skillsList: ["C#", "C++", ".Net", "WPF", "COM", "Windows Registry", "Git", "Scrum"],
    accomplishmentsList: [
      "Fixed several complex bugs on an extremely large codebase which supports dozens of different hardware configurations",
    ]
  }

  const cadSoftware = {
    iconUrl: "ThermoFisherLogo_64.png",
    title: "Software Engineer II",
    company: "ThermoFisher Scientific",
    fromYear: "2018",
    toYear: "2019",
    projectName: "CAD Software for Electron Microscopy",
    projectDescription: "Windows/Linux application used for navigating microscope devices using CAD interface as reference",
    skillsList: ["C++", "Qt", "TCP/IP", "Git", "Scrum"],
    accomplishmentsList: [
      "Developed mock hardware interface so software can be tested without needing physical endpoint",
      "Created application used for translating requests from RPC to TCP/IP necessary for 64-bit to 32-bit RPC incompatibility"
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
    skillsList: ["C++", "AWS Lambda", "Swift", "SwiftUI", "Microcontrollers", "Circuit Design", "Particle IO"],
    accomplishmentsList: [
      "Made standard garage door is controllable via IOS application as well as through Amazon's Alexa"
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
                  Refactored codebase to accomodate new scan board which included: 
                  <ul>
                    <li>Adding features for drawing complex shapes</li>
                    <li>Generating matrix transformations necessary for converting between hardware and software coordinate systems</li>
                    <li>Modifying existing pattern calculations to work with new patterns</li>
                    <li>Altering new scan board codebase to make new scan types more consistent and efficient</li>
                  </ul>
                </li>
                <li>
                  Significantly increased team productivity, efficiency, and time by creating a software builder web interface.
                  (See <span className="link" onClick={goToAngularPageFunc}>AngularJS</span> and <span className="link" onClick={goToNodePageFunc}>NodeJS</span> sections for more information)</li>
              </ul>
            </Experience>
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