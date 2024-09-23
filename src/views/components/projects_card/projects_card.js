import React from 'react';
import './projects_card.css'
import { Link } from 'react-router-dom';
import Project from '../../pages/project/project';

const ProjectsCard = ({ title, image, description }) => {
  return (
        <div className="projectsCards" style={{ backgroundImage: `url(${image})` }}>
          <Link to={'/project'}>
            <div className='projectsCardsText'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
          </Link>
        </div>
  );
};

export default ProjectsCard;
