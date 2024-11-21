import React from "react";
import Banner from "../../components/banner/banner";
import colors from "../../../assets/colors/colors";
import ProjectsList from "../../components/projectsList/projectsList";
import './projects_component.css'

function Projects_Component() {

    return(
        <div style={{backgroundColor: colors.backgroung}} className="projects_component">
            <div>
                <div className="projects_component_title" style={{ color: colors.primary }}>
                    <h2>Projets réalisés</h2>
                </div>
                <ProjectsList/>
            </div>
        </div>
    )
}

export default Projects_Component;