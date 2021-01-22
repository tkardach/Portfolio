import './Experience.css';
import React from 'react';


const Experience = ({
    iconUrl,    
    title, 
    company, 
    fromYear, 
    toYear, 
    projectName,
    projectDescription,
    skillsList,
    accomplishmentsList,
    children}) => {
    const yearString = fromYear ? toYear ? `${fromYear} - ${toYear}` : fromYear : '2009 - Present'
    const newTitle = title ? title : 'Title';
    const newCompany = company ? company : 'Company';
    const newIconUrl = iconUrl ? iconUrl : 'logo192.png';
    const newProjectName = projectName ? projectName : 'Project Name';
    const newProjectDesc = projectDescription ? projectDescription : 'Project description';

    const newSkills = skillsList ? 
        (Array.isArray(skillsList) ? skillsList : [skillsList]) 
        : [];

    const skills = []

    for (let i=0; i<newSkills.length; i++) {
        skills.push(
            <p key={i} className="work-experience-relavent-skill">{newSkills[i]}</p>
        )
    }

    const newAccomplishments = accomplishmentsList ? 
        (Array.isArray(accomplishmentsList) ? accomplishmentsList : [accomplishmentsList]) 
        : [];

    const accomplishments = []

    for (let i=0; i<newAccomplishments.length; i++) {
        accomplishments.push(
            <li key={i}>{newAccomplishments[i]}</li>
        )
    }

    const renderAccomplishments = () => {
        return (
            <ul className="work-experience-list">
                {accomplishments}
            </ul>
        )
    }

    return (
        <div className="experience-container">
            <div className="experience-info">
                <div className="experience-title-container">
                    <div className="experience-icon icon">
                        <img 
                            src={newIconUrl} 
                            alt={title}/>
                    </div>
                    <div className="experience-description">
                        <p className="experience-title">{newTitle}</p>
                        <p className="experience-company">{newCompany}</p>
                    </div>
                </div>
                <div className="experience-duration">
                    <div className="vertical"/>
                    <p className="experience-years">{yearString}</p>
                </div>
            </div>
            <div className="experience-summary">
                <p className="work-experience-title">{newProjectName}</p>
                <p className="work-experience-description">{newProjectDesc}</p>
                <p className="work-experience-challenges">Relavent Skills</p>
                <div className="work-experience-relavent-skills">
                    {skills}
                </div>
                <p className="work-experience-challenges">Accomplishments</p>
                {renderAccomplishments()}
                {children}
            </div>
        </div>
    );
};

export default Experience;