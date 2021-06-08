import './AboutPage.css';
import React from 'react';


const AboutPage = ({className, aboutPicUrl}) => {
  const openFinanceJS = () => {
    window.open('https://tommy.kardach.com/finance-js');
  }

  const openReservations = () => {
    window.open('https://tommy.kardach.com/reservations/make-reservations');
  }
  
  aboutPicUrl =  aboutPicUrl ? aboutPicUrl : '#';

  return (
    <div className={className} id="about-page-container">
      <div id="about-page-content">
        <div id="about-image-container">
          <img id="about-image" alt="about-pic" src={aboutPicUrl}/>
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
        <div id="finance-js-project" className="about-project" onClick={openFinanceJS}>
          <img className="about-project-image bottom" alt="finance-js" src="FinanceJSPage_500.png"/>
          <img className="about-project-image top" alt="finance-js" src="FinanceJSLogo_500.png"/>
        </div>
        <div id="reservation-project" className="about-project" onClick={openReservations}>
          <img className="about-project-image bottom" alt="swimclub" src="ReservationPage_500.png"/>
          <img className="about-project-image top" alt="swimclub" src="SwimClubLogo_500.png"/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;