import './OverviewPage.css';
import React from 'react';
import Skill from '../../components/skill/Skill';

const OverviewPage = () => {
  return (
    <div id="overview">
        <h1 id="overview-title">Overview</h1>
        <div id="statement">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
        </div>
        <div>
          <Skill
            name="Test"
            percentage={100}
            color={'blue'}></Skill>
          <img 
            style={{width: 100, height: 100}}
            src={'CPPLogo.png'} 
            alt={'test'}/>
            <br/>
          <img 
            style={{width: 100, height: 100}}
            src={'CSharpLogo.png'} 
            alt={'test'}/>
            <br/>
          <img 
            style={{width: 100, height: 100}}
            src={'PythonLogo.png'} 
            alt={'test'}/>
            <br/>
          <img 
            style={{width: 100, height: 100}}
            src={'NodeJSLogo.png'} 
            alt={'test'}/>
        </div>
    </div>
  );
};

export default OverviewPage;