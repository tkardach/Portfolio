import './AboutPage.css';
import React from 'react';


const AboutPage = ({className}) => {
  return (
    <div className={className} id="about-page-container">
      <div id="about-image-container">
        <img id="about-image" alt="about-pic" src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"/>
      </div>
      <div id="about-page">
        <p id="about-intro">
          Hi, I'm Tommy, I'm a Software Engineer
        </p>
        <p id="about-statement">
          I am an excellent programmer with experience developing for applications which operate complex machinery. 
          In my free time I enjoy engaging in projects that refine my skills, broaden my knowledge, and teach me 
          valuable lessons which I can take with me to the next project. 
        </p>
      </div>
      <div id="finance-js-project" class="about-project">
        <img class="about-project-image bottom" alt="finance-js" src="FinanceJSPage_500.png"/>
        <img class="about-project-image top" alt="finance-js" src="FinanceJSLogo_500.png"/>
      </div>
      <div id="reservation-project" class="about-project">
        <img class="about-project-image bottom" alt="swimclub" src="ReservationPage_500.png"/>
        <img class="about-project-image top" alt="swimclub" src="SwimClubLogo_500.png"/>
      </div>
    </div>
  );
};

export default AboutPage;