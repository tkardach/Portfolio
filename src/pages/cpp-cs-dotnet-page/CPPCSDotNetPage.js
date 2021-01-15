import './CPPCSDotNetPage.css';
import React from 'react';
import Experience from '../../components/experience/Experience';


const CPPCSDotNetPage = () => {
  return (
    <div className="cpp-container">
      <h1 className="title">Work Experience</h1>
      <div className="cpp-experience">
        <Experience 
          iconUrl="ThermoFisherLogo_64.png"
          title="Software Engineer II"
          company="ThermoFisher Scientific"
          fromYear="2018"
          toYear="Present">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        </Experience>
        <Experience 
          iconUrl="ThermoFisherLogo_64.png"
          title="Software Engineer Intern"
          company="ThermoFisher Scientific"
          fromYear="2017"
          toYear="2018">
            
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        </Experience>
      </div>
    </div>
  );
};

export default CPPCSDotNetPage;