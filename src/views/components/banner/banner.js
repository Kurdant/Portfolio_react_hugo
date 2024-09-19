import React from "react";
import imageBackground from "../../../assets/background_img_cropped.jpeg"
import colors from "../../../assets/colors/colors";
import './banner.css'

function Banner(props) {

    return(
    <div className="banner">
        <img src={imageBackground} className="banner_img"/>
        <div className="banner_texte">        
            <h1 style={{ color: colors.primary }}>{props.title}</h1>
        </div>
    </div>
    )
}

export default Banner;