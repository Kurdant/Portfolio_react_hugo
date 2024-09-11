import React from "react";
import imageBackground from "../../../assets/background_img_cropped.jpeg"
import './banner.css'

function Banner() {

    return(
    <div className="banner">
        <img src={imageBackground} className="banner_img"/>
        <div className="banner_texte">        
            <h1>PORTFOLIO</h1>
        </div>
    </div>
    )
}

export default Banner;