import './AboutPage.css';
import React from 'react';


const AboutPage = ({className}) => {
  return (
    <div className={className}>
      <h1 className="title">About Me</h1>
      <div id="about-page">
        <p style={{float: 'left'}}><img className="about-image"  alt="test" src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"/></p>
        <p>
          &emsp;Hi, I'm Tommy, I'm a Software Engineer based in Scotts Valley, California. I am an excellent programmer
          with experience developing for applications which operate complex machinery. In my free time I enjoy engaging in projects
          that refine my skills, broaden my knowledge, and teach me valuable lessons which I can take with me to the next project. 
          When I'm not programming you can find me playing Mario Kart with my wife or playing online Chess. 
        </p>
      </div>
    </div>
  );
};

export default AboutPage;