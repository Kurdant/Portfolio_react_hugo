import React from "react";
import Banner from "../../components/banner/banner";
import Menu from "../../components/menu/menu";
import Menu_Second from "../../components/menu_second/menu_second";
import About_Component from "../../components/about_component/about_component";
import Projects_Component from "../../components/projects_component/projects_component";
import Contact_Component from "../../components/contact_component/contact_component";
import './home.css'

function Home() {

    return(
    <body>
        <Menu/>
        <Banner title="KURDANT" subtitle="Lance ta boutique en ligne, Je m'occupe de tout" text="Je crée ta boutique en ligne de A à Z pour lancer ton business e-commerce, sans se prendre la tête avec la technique." />
        {/* <About_Component/>
        <Projects_Component/>
        <Contact_Component/> */}
    </body>
    )
}

export default Home;