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
              fromYear="2020"
              toYear="Present">
              <p className="work-experience-title">New Circuit Edit Software</p>
              <p className="work-experience-description">Windows application used to control an advanced Focused Ion Beam machine used for circuit edit.</p>
              <ul className="work-experience-list">
                <li></li>
                <li>Extremely large code base spanning multiple different machines with dozens of supporting software developers.</li>
                <li>Server codebase written in C++ using COM and utilizing windows registry.</li>
                <li>Client codebase written in C# with WPF.</li>
              </ul>
              <br/>
              <p className="work-experience-challenges">Challenges</p>
              <p className="work-experience-problem-solution">Problem</p>
              <p className="work-experience-description">
              </p>
              <p className="work-experience-problem-solution">Solution</p>
              <p className="work-experience-description">
              </p>
              <br/>
            </Experience>
            <Experience
              iconUrl="ThermoFisherLogo_64.png"
              title="Software Engineer II"
              company="ThermoFisher Scientific"
              fromYear="2017"
              toYear="Present">
              <p className="work-experience-title">Legacy Circuit Edit Software</p>
              <p className="work-experience-description">Windows application used to control an advanced Focused Ion Beam machine used for circuit edit.</p>
              <ul className="work-experience-list">
                <li>Assisted in migrating codebase from 32-bit to 64-bit.</li>
                <li></li>
                <li>
                  Supported tasks to upgrade scan board, which involved: 
                  <ul>
                    <li>Refactoring code base to </li>
                  </ul>
                </li>
                <li>Updated and refactored client software to allow for creating advanced milling patterns.</li>
                <li>Server codebase in C# with .Net Framework with some references to C++ classes through COM.</li>
                <li>Client codebase in C# with .Net Framework with some references to C++ classes through COM, using Windows Forms and WPF</li>
              </ul>
              <br/>
              <p className="work-experience-challenges">Challenges</p>
              <p className="work-experience-problem-solution">Problem</p>
              <p className="work-experience-description">
                During migration from 32-bit to 64-bit OS, certain hardware drivers were incompatible with 64-bit.
              </p>
              <p className="work-experience-problem-solution">Solution</p>
              <p className="work-experience-description">
                Create an out-of-process 32-bit COM server which could be consumed by our 64-bit application.
              </p>
              <br/>
              <p className="work-experience-problem-solution">Problem</p>
              <p className="work-experience-description">
                Intensive post-processing affects were causing scanning slow-downs, due to scans with a high pixel count 4M+.
              </p>
              <p className="work-experience-problem-solution">Solution</p>
              <p className="work-experience-description">
                Moved all post-processing actions onto GPU using DirectX pixel shaders, which made the code more readable and efficient.
              </p>
              <br/>
            </Experience>
            <Experience 
              iconUrl="ThermoFisherLogo_64.png"
              title="Software Engineer II"
              company="ThermoFisher Scientific"
              fromYear="2018"
              toYear="2019">
              <p className="work-experience-title">CAD Software for Electron Microscopy</p>
              <p className="work-experience-description">Windows/Linux application used for navigating microscope devices using CAD interface as reference.</p>
              <ul className="work-experience-list">
                <li>Application written in C++ with Qt.</li>
              </ul>
              <br/>
              <p className="work-experience-challenges">Challenges</p>
              <p className="work-experience-problem-solution">Problem</p>
              <p className="work-experience-description">

              </p>
              <p className="work-experience-problem-solution">Solution</p>
              <p className="work-experience-description">
                Instead of rewriting the build script using a more NodeJS friendly system, I made minor 
              </p>
            </Experience>
          </div>
        </div>
        <div>
          <h1 className="title">Projects</h1>
          <div className="work-experience">
            <Experience 
              iconUrl="ThermoFisherLogo_64.png"
              title="Software Engineer II"
              company="ThermoFisher Scientific"
              fromYear="2018"
              toYear="Present">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            </Experience>
          </div>
        </div>
      </Carousel>
  );
};

export default CPPCSDotNetPage;