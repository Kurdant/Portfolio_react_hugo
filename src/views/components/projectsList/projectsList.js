import React from 'react';
import ProjectsCard from '../projects_card/projects_card';
import image1 from "../../../assets/cardImages/image_1_cards.jpg"
import image2 from "../../../assets/cardImages/image_2_cards.jpg"
import image3 from "../../../assets/cardImages/image_3_cards.jpg"
import image4 from "../../../assets/cardImages/image_4_cards.jpg"

import './projectsList.css'

const projects = [
  {
    id: 1,
    title: 'Project 1',
    image: image1, 
    description: 'Description du premier projet.',
  },
  {
    id: 2,
    title: 'Project 2',
    image: image2,
    description: 'Description du deuxième projet.',
  },
  {
    id: 3,
    title: 'Project 3',
    image: image3,
    description: 'Description du deuxième projet.',
  },
  {
    id: 4,
    title: 'Project 4',
    image: image4,
    description: 'Description du deuxième projet.',
  },
];

const ProjectsList = () => {
  return (
        <div className="projectsList">
        {projects.map((project) => (
            <ProjectsCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            />
        ))}
        </div>
  );
};

export default ProjectsList;
