import './OverviewPage.css';
import React from 'react';
import Skill from '../../components/skill/Skill';


const OverviewPage = ({className}) => {
  return (
    <div id="overview" className={className}>
        <h1 id="overview-title" className="title">Back End/Full Stack Software Engineer</h1>
        <div id="statement">
          <p>
          I am a Full Stack software engineer skilled in Object-Oriented Design and Programming with a focus on back-end development.
          </p>
        </div>
        <h2 id="skill-title">Skill Confidence</h2>
        <div id="skills-section">
          <Skill
            name="C#"
            iconUrl="CSharpLogo_100.png"
            percentage={95}
            color={'#813284'}/>
          <Skill
            name="NodeJS/JavaScript"
            iconUrl="NodeJSLogo_100.png"
            percentage={85}
            color={'#539E43'}/>
          <Skill
            name="C++"
            iconUrl="CPPLogo_100.png"
            percentage={80}
            color={'#1B598E'}/>
          <Skill
            name="Python"
            iconUrl="PythonLogo_100.png"
            percentage={70}
            color={'#FBD140'}/>
        </div>
    </div>
  );
};

export default OverviewPage;