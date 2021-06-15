import './OverviewPage.css';
import React from 'react';
import Skill from '../../components/skill/Skill';


const OverviewPage = ({className}) => {
  className = `${className} overview-container`;
  
  return (
    <div className={className}>
      <div id="overview">
        <h1 id="overview-title" className="title">Back End/Full Stack Software Engineer</h1>
        <div id="statement">
          <p>
          I am a Full Stack Software Engineer skilled in Object-Oriented Design and Programming with a focus on back-end development
          </p>
        </div>
        <h2 id="skill-title">Language Confidence</h2>
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
        <h2 id="skill-title">Other Skills</h2>
        <div id="other-skills-section">
          <div className="box">
            <Skill
              name="WPF"
              percentage={65}
              color={'#1397C4'}/>
            <Skill
              name="WinForms"
              percentage={95}
              color={'#91C300'}/>
            <Skill
              name="HTML5"
              percentage={80}
              color={'#E44D26'}/>
            <Skill
              name="CSS"
              percentage={65}
              color={'#1B73BA'}/>
          </div>
          <div className="box">
            <Skill
              name=".Net"
              percentage={60}
              color={'#682A7B'}/>
            <Skill
              name="Algorithms"
              percentage={85}
              color={'#444444'}/>
            <Skill
              name="Linux OS"
              percentage={75}
              color={'#F5C021'}/>
              <Skill
                name="Windows OS"
                percentage={100}
                color={'#00ADEF'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;