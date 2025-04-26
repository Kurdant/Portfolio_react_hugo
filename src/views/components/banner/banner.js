import React from "react";
import { Link } from "react-router-dom";
import imageBackground from "../../../assets/background_home_1_vaporwave.jpg"
import colors from "../../../assets/colors/colors";
import './banner.css'
import Contact from "../../pages/contact/contact";
import Button from "../button/button";


function Banner(props) {

    return(
    <div className="banner">
        {/* <img src={imageBackground} className="banner_img"/> */}
        <div className="banner_texte">        
            <h1 className="title" style={{ color: colors.primary }}>{props.title}</h1>
            <h2 className="subtitle" style={{ color: colors.primary }}>{props.subtitle}</h2>
            <Button link="/projects"/>
        </div>
        <div>
        </div>
        {/* <div className="banner_menu" style={{ color: colors.menu }}>
            <Link className="banner_menu_link"><p style={{ color: colors.menu }}>{props.link1}</p></Link>
            <Link className="banner_menu_link"><p style={{ color: colors.menu }}>{props.link2}</p></Link>
            <Link className="banner_menu_link"><p style={{ color: colors.menu }}>{props.link3}</p></Link>
            <Link className="banner_menu_link"><p style={{ color: colors.menu }}>{props.link4}</p></Link>
        </div> */}
    </div>
    )
}

export default Banner;