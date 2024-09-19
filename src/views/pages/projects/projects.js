import React from "react";
import Banner from "../../components/banner/banner";
import colors from "../../../assets/colors/colors";
import ProjectsList from "../../components/projectsList/projectsList";
import './projects.css'

function Projects() {

    return(
        <body style={{backgroundColor: colors.backgroung}}>
            <Banner title="PROJECTS"/>
            <div>
                <ProjectsList/>
            </div>
        </body>
    )
}

export default Projects;