import './NodeJSExpressPage.css';
import React from 'react';
import Experience from '../../components/experience/Experience';


const NodeJSExpressPage = () => {
  return (
    <div className="nodejs-page">
      <h1 className="title">Work Experience</h1>
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
  );
};

export default NodeJSExpressPage;