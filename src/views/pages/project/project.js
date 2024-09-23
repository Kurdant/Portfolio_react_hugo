import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../../projects.json';
import Error from '../error404/error';



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
    <div>
      <p>{project.title}</p>
    </div>
  );
};

export default Fiche_Logement;
