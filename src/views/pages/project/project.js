import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../../projects.json';
import Error from '../error404/error';
import './project.css'
import Banner from '../../components/banner/banner';



const Fiche_Logement = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find(h => h.id === id);
    setProject(selectedProject);
  }, [id]);

  if (!project) {
    return <Error/>;
  }

  return (
    <body>
      <div className='project_parent'>
        <Banner className="project_background"/>
        <div className='project_content'>
          <div className='project_side_left'>
            <div className='project_side_text'>
              <p>{project.title}</p>
              <p>{project.content}</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Fiche_Logement;
