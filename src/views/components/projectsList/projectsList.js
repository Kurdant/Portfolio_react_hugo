import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsJson from '../../../projects.json'
import './projectsList.css'
import colors from '../../../assets/colors/colors';
import { useNavigate, useLocation } from "react-router-dom";


const ProjectsList = () => {
  const [projects, setProjects] = useState(projectsJson)
  const displayedProjects = projects.slice(0, 3);
  const navigate = useNavigate();

  return (
    <div>
      <div className="projectsList">
        {displayedProjects.map((project) => (
          <div key={project.id} className="project">
            <div className='projectLink'>
              <span></span>
              <Link target='_blank' to={`${project.link}`} className='projectLinkContent'>
                <div className="projectsTitle"><h2>{project.title}</h2></div>
                <div className="projectsDescription"><p>{project.description}</p></div>
                <div className="projectsDescription"><p>- {project.techno}</p></div>
                <div className="projectsDescription"><p>{project.content}</p></div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='projectsList_button' style={{color: colors.primary,}}>
        <a onClick={() => navigate('/projects')} style={{background: colors.menu}}>Voir tout les projets</a>
      </div>
    </div>
  );
};

export default ProjectsList;