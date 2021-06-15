import './ReactPage.css';
import React from 'react';
import Experience from '../../components/experience/Experience';


const ReactPage = ({className}) => {

  const portfolio = {
    iconUrl: "Logo64.png",
    title: "Front End Web Developer",
    company: "Myself",
    fromYear: "2020",
    projectName: "This Website!",
    projectDescription: "Simplistic portfolio website used for consolidating all of my skills onto a single platform",
    skillsList: ["React", "HTML5", "CSS3", "JavaScript"],
    accomplishmentsList: [
      "Designed and developed this portfolio website",
      "Developed first iteration over the course of a week with no prior knowledge or experience with ReactJS"
    ]
  }
  
  return (
    <div className={className}>
      <h1 className="title">Projects</h1>
      <div className="work-experience">
        <Experience 
          iconUrl={portfolio.iconUrl}
          title={portfolio.title}
          company={portfolio.company}
          fromYear={portfolio.fromYear}
          toYear={portfolio.toYear}
          projectName={portfolio.projectName}
          projectDescription={portfolio.projectDescription}
          skillsList={portfolio.skillsList}
          accomplishmentsList={portfolio.accomplishmentsList}>
        </Experience>
      </div>
    </div>
  );
};

export default ReactPage;