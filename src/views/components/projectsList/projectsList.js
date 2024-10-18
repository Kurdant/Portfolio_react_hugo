import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsJson from '../../../projects.json'
import './projectsList.css'

const ProjectsList = () => {
  const [projects, setProjects] = useState(projectsJson)
  const displayedProjects = projects.slice();

  return (
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
  );
};

export default ProjectsList;
