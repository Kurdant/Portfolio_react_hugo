import React from "react";
import Banner from "../banner/banner";
import "./about_component.css";

function About_Component() {
  return (
    <div className="about_parents">
        <div className="about_content_side">
          <div className="about_content">
            <p>
              Hey, je suis Hugo Paynaud et j'utilise Kurdant comme surnom sur
              Internet. Je suis développeur web front-end. Passionné de sport surtout musculation et la course
              , je suis toujours curieux d'apprendre plus sur les
              nouvelles technologies et le creative coding.
            </p>
          </div>
          {/* <div className="about_content_right"></div> */}
        </div>
    </div>
  );
}

export default About_Component;
