import React from "react";
import colors from "../../../assets/colors/colors";
import { useNavigate } from "react-router-dom";
import '../button/button.css'

function Button({ link = "/" }) {
    const navigate = useNavigate();

    return (
        <div className='button'>
            <a onClick={() => navigate(link)} style={{ border: `5px solid ${colors.primary}`, cursor: 'pointer', background: 'transparent', color: `${colors.primary}` }}>
                Voir tous les projets
            </a>
        </div>
    );
}

export default Button;
