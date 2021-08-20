import './HTMLPage.css';
import React from 'react';
import Experience from '../../components/experience/Experience';


const HTMLPage = ({className}) => {

  const portfolio = {
    iconUrl: "SSB_Logo_64.png",
    title: "Front End Web Developer",
    company: "Saratoga High School Sports Boosters",
    fromYear: "2021",
    projectName: "Sports Boosters Website",
    projectDescription: "Simplistic website used by Saratoga High School parents to donate to school sports",
    skillsList: ["HTML5", "CSS3", "Nginx"],
    accomplishmentsList: [
      "Redesigned entire website using modern design for a more aesthetic appeal",
      "Provided skills as a volunteer",
      "Converted the webpage to Google Sites so board members can manage the site themselves, removing hourly cost spent on previous developers to make changes"
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

export default HTMLPage;