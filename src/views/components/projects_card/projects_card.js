import React from 'react';
import './projects_card.css'

const ProjectsCard = ({ title, image, description }) => {
  return (
        <div className="projectsCards" style={{ backgroundImage: `url(${image})` }}>
            <div className='projectsCardsText'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
  );
};

export default ProjectsCard;
