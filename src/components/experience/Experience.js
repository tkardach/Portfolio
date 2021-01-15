import './Experience.css';
import React from 'react';


const Experience = ({iconUrl, title, company, fromYear, toYear, children}) => {
    const newFromYear = fromYear ? fromYear : '2009';
    const newToYear = toYear ? toYear : 'Present';
    const newTitle = title ? title : 'Title';
    const newCompany = company ? company : 'Company';
    const newIconUrl = iconUrl ? iconUrl : 'logo192.png';

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
                    <div class="vertical"/>
                    <p className="experience-years">{newFromYear} - {newToYear}</p>
                </div>
            </div>
            <div className="experience-summary">
                {children}
            </div>
        </div>
    );
};

export default Experience;