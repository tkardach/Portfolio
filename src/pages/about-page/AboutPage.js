import './AboutPage.css';
import React from 'react';


const AboutPage = ({className}) => {
  return (
    <div className={className}>
      <h1 className="title">About Me</h1>
      <div id="about-page">
        <p>
          I am a software engineer! I enjoy what I do; this website is a testament to that statement. When I am not currently
          engaged in a project, I am typically thinking about new projects. I love learning new concepts and exploring what's 
          popular in the software world. Most of all, I love perfecting my craft; I always approach a project with a UML diagram
          and a project structure, and if I ever deviate from the original design during development I always learn a valuable 
          lesson 
        </p>
      </div>
    </div>
  );
};

export default AboutPage;