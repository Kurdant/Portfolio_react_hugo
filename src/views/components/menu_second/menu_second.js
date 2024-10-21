import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import colors from "../../../assets/colors/colors";
import './menu_second.css';

function Menu_Second() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="menu_second">
      <div className="link" onClick={() => navigate('/')}>
        <p>HOME</p>
      </div>
      <div className="menu_links">
        <div className="link" onClick={() => navigate('/about')} style={{ color: colors.primary }}>ABOUT</div>
        <div className="link" onClick={() => navigate('/projects')} style={{ color: colors.primary }}>PROJECTS</div>
        <div className="link" onClick={() => navigate('/contact')} style={{ color: colors.primary }}>CONTACT</div>
        <div className="link" onClick={() => navigate('/more')} style={{ color: colors.primary }}>MORE..</div>
      </div>
    </div>
  );
}

export default Menu_Second;
