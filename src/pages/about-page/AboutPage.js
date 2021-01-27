import './AboutPage.css';
import React from 'react';


const AboutPage = ({className}) => {
  return (
    <div className={className}>
      <img id="about-image"  alt="test" src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"/>
      <div id="about-page">
        <p id="about-intro">
          Hi, I'm Tommy, I'm a Software Engineer based in Scotts Valley, California. 
        </p>
        <p id="about-statement">
          I am an excellent programmer with experience developing for applications which operate complex machinery. 
          In my free time I enjoy engaging in projects that refine my skills, broaden my knowledge, and teach me 
          valuable lessons which I can take with me to the next project. 
        </p>
      </div>
    </div>
  );
};

export default AboutPage;