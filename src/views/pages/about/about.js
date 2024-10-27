import React from "react";
import Banner from "../../components/banner/banner";
import './about.css'

function About() {

    return(
    <div className="about_parents">
        <Banner title="À PROPOS"/>
        <div className="about_content">
            <div className="about_content_side">
                <div className="about_content_left">
                    <h1>Hugo, 18 ans, développeur web spécialisé en front-end</h1>
                    <h2>Parcours</h2>
                    <p>J'ai commencé à coder en 2022 sur OpenClassrooms. Ensuite, j'ai suivi une formation en alternance pendant 18 mois chez Shenron Dev pour obtenir mon diplôme d'intégrateur web. J'ai découvert le code parce que ça m'intéressait vraiment, et j'ai rapidement su que c'était une carrière que je voulais poursuivre.</p>
                    <h2>Compétences</h2>
                    <p>Je maîtrise les langages HTML, CSS, JavaScript, ainsi que les frameworks et outils comme React, WordPress, et PrestaShop.</p>
                    <h2>Projets</h2>
                    <p>J'ai travaillé sur plusieurs projets, allant de la création de sites avec des CMS comme WordPress et PrestaShop, à des sites web personnalisés en React. Mon portfolio lui-même a été développé avec React pour montrer mes compétences en front-end.</p>
                    <h2>Personel</h2>
                    <p>En dehors du développement web, j'aime beaucoup le sport tel que la musculation et la course à pied.</p>
                    </div>
                <div className="about_content_right">
                </div>
             </div>
        </div>
    </div>
    )
}

export default About;