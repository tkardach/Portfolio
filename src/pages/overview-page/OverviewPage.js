import './OverviewPage.css';
import React from 'react';
import Skill from '../../components/skill/Skill';

const OverviewPage = () => {
  return (
    <div id="overview">
        <h1 id="overview-title">Back End/Full Stack Software Engineer</h1>
        <div id="statement">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
        </div>
        <div id="skills-section">
          <Skill
            name="C#"
            iconUrl="CSharpLogo.png"
            percentage={90}
            color={'#813284'}/>
          <Skill
            name="NodeJS/JavaScript"
            iconUrl="NodeJSLogo.png"
            percentage={75}
            color={'#539E43'}/>
          <Skill
            name="C++"
            iconUrl="CPPLogo.png"
            percentage={70}
            color={'#1B598E'}/>
          <Skill
            name="Python"
            iconUrl="PythonLogo.png"
            percentage={60}
            color={'#FBD140'}/>
        </div>
    </div>
  );
};

export default OverviewPage;