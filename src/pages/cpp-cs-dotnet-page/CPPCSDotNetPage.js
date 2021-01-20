import './CPPCSDotNetPage.css';
import React from 'react';
import Experience from '../../components/experience/Experience';
import Carousel from '../../components/carousel/Carousel';


const CPPCSDotNetPage = ({className}) => {
  return (
      <Carousel className={className} vertical={false}>
        <div>
          <h1 className="title">Work Experience</h1>
          <div className="work-experience">
            <Experience
              iconUrl="ThermoFisherLogo_64.png"
              title="Software Engineer II"
              company="ThermoFisher Scientific"
              fromYear="2017"
              toYear="Present">
              <p className="work-experience-title">Legacy Circuit Edit Software</p>
              <p className="work-experience-description">Windows application used to control an advanced Focused Ion Beam used for circuit edit</p>
              <ul>
                <li>Currently working as the sole software developer maintaining and developing this software</li>
                <li>Working as member of Scrum team with daily meetings</li>
                <li>Server codebase in C# with .Net Framework with some references to C++ classes through COM</li>
                <li>Client codebase in C# with .Net Framework with some references to C++ classes through COM, using Windows Forms and WPF</li>
              </ul>
              <p className="work-experience-challenges">Accomplishments</p>
              <ul className="work-experience-list">
                <li>Migrated codebase from 32-bit to 64-bit.</li>
                <li>Updated and refactored client software to allow for creating advanced milling patterns</li>
                <li>
                  Supported tasks to integrate new scan board with software, which involved: 
                  <ul>
                    <li>Refactoring code base to accept new patterning shapes</li>
                    <li>Creating new structure for receiving imaging data</li>
                    <li>Generating proper matrix transformations between coordinate systems from hardware scanning to imaging</li>
                    <li>Altering existing patterning calculations to work with new scan board</li>
                  </ul>
                </li>
                <li>Created web application for building software in my free time, which streamlined multiple time consuming tasks including:
                  <ul>
                    <li>Compiling the application and generating an installer, which was previously the responsibility of select developers</li>
                    <li>Downloading the installer directly from the web server, as opposed to the shared file system</li>
                    <li>Comparing changes between builds, which used to include comparing installer creation date with git commits</li>
                    <li>Creating feature branches, which was the responsibility of select developers due to the complexity</li>
                  </ul>
                </li>
              </ul>
              <p className="work-experience-challenges">Challenges</p>
              <p className="work-experience-problem-solution">Problem</p>
              <p className="work-experience-problem-solution-answer">
                During migration from 32-bit to 64-bit OS, certain hardware drivers were incompatible with 64-bit
              </p>
              <p className="work-experience-problem-solution">Solution</p>
              <p className="work-experience-problem-solution-answer">
                Created an out-of-process 32-bit COM server which could be consumed by our 64-bit application
              </p>
              <br/>
              <p className="work-experience-problem-solution">Problem</p>
              <p className="work-experience-problem-solution-answer">
                Intensive post-processing effects were causing imaging slow-downs, due to scans with high pixel counts
              </p>
              <p className="work-experience-problem-solution">Solution</p>
              <p className="work-experience-problem-solution-answer">
                Moved all post-processing effect calculations onto GPU using DirectX pixel shaders, which also made the code more readable and efficient
              </p>
              <br/>
              <p className="work-experience-problem-solution">Problem</p>
              <p className="work-experience-problem-solution-answer">
                Pixel interpolation was not working for small resolution images overlayed into larger resolution background texture
              </p>
              <p className="work-experience-problem-solution">Solution</p>
              <p className="work-experience-problem-solution-answer">
                Refactored code to stop drawing smaller resolution images into the background texture, and instead use DirectX Sprites to draw overlayed images with their own resolution while still maintaining true aspect ratio relative to background texture
              </p>
              <br/>
            </Experience>
            <Experience 
              iconUrl="ThermoFisherLogo_64.png"
              title="Software Engineer II"
              company="ThermoFisher Scientific"
              fromYear="2020"
              toYear="Present">
              <p className="work-experience-title">New Circuit Edit Software</p>
              <p className="work-experience-description">Windows application used to control an advanced Focused Ion Beam machine used for circuit edit</p>
              <ul>
                <li>Working as member of Scrum team with daily meetings</li>
                <li>Extremely large code base spanning multiple different machines with dozens of supporting software developers accross the globe</li>
                <li>Server codebase written in C++ using COM and utilizing windows registry</li>
                <li>Client codebase written in C# with WPF</li>
              </ul>
            </Experience>
            <Experience 
              iconUrl="ThermoFisherLogo_64.png"
              title="Software Engineer II"
              company="ThermoFisher Scientific"
              fromYear="2018"
              toYear="2019">
              <p className="work-experience-title">CAD Software for Electron Microscopy</p>
              <p className="work-experience-description">Windows/Linux application used for navigating microscope devices using CAD interface as reference</p>
              <ul>
                <li>Worked as member of Scrum team with daily meetings</li>
                <li>Application interfaces with multiple different microscope devices through TCP/IP or RPC connection</li>
                <li>Application written in C++ with Qt</li>
              </ul>
              <p className="work-experience-challenges">Accomplishments</p>
              <ul className="work-experience-list">
                <li>Developed mock hardware interface so software can be tested without needing physical endpoint</li>
                <li>Developed RPC Adapter application responsible for translating requests from RPC to TCP/IP</li>
              </ul>
              <br/>
            </Experience>
          </div>
        </div>
        <div>
          <h1 className="title">Projects</h1>
          <div className="work-experience">
            <Experience 
              iconUrl="Logo64.png"
              title="Full Stack/Embedded Developer"
              company="Myself"
              fromYear="2020"
              toYear="">
              <p className="work-experience-title">Garage Door Opener</p>
              <p className="work-experience-description">Converted a standard garage door into a WiFi controllable garage door</p>
              <ul>
                <li>Garage door is controllable via IOS application as well as through Amazon's Alexa</li>
                <li>Not intended to be developed for mass production, this was simply a fun project to play with microcontrollers and add a useful feature to my home</li>
                <li>Used Particle.io Photon developer board as a microcontroller for operating the garage door</li>
                <li>Embedded code written in C++, Front End written in Swift with SwiftUI</li>
              </ul>
            </Experience>
            <Experience 
              iconUrl="Logo64.png"
              title="Embedded Developer"
              company="Myself"
              fromYear="2020"
              toYear="">
              <p className="work-experience-title">Dead Man's Switch</p>
              <p className="work-experience-description">Created power outlet which power cycles when connection to WiFi is lost; intended to restart router remotely</p>
              <ul>
                <li>Intended to be used for my Wife's grandparents' cabin; they enjoy watching the blink cameras but the router often stops working</li>
                <li>Used Particle.io Photon developer board as a microcontroller for checking WiFi connection and power cycling outlet</li>
                <li>Embedded code written in C++</li>
              </ul>
            </Experience>
          </div>
        </div>
      </Carousel>
  );
};

export default CPPCSDotNetPage;