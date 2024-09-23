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
          <div key={project.id} className="projects">
            <Link to={`/project/${project.id}`}>
               <div className="projectsTitle"><h2>{project.title}</h2></div>
               <div className="projectsDescription"><p>{project.description}</p></div>
            </Link>
          </div>
        ))}
        </div>
  );
};

export default ProjectsList;
