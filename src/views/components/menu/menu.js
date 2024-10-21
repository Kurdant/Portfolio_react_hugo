import React, { useState } from "react";
import './menu.css';
import { useNavigate } from "react-router-dom";
import colors from "../../../assets/colors/colors";

function Menu() {
  const navigate = useNavigate();
  const [isPulldownOpen, setIsPulldownOpen] = useState(false);

  const togglePulldown = () => {
    setIsPulldownOpen(!isPulldownOpen);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setIsPulldownOpen(false); // Ferme le menu après la navigation
  };

  return (
    <div>
      <div className="menu" onClick={togglePulldown}>
        <div className="menu_parent">
          <div className="Tiret_1 Tiret"></div>
          <div className="Tiret_2 Tiret"></div>
          <div className="Tiret_3 Tiret"></div>
        </div>
      </div>

      <div className={`pulldown ${isPulldownOpen ? 'active' : ''}`}>
        <div className="close-btn" onClick={togglePulldown} style={{ color: colors.primary }}>✖</div>
        <div className="menu_link margin_top_menu" onClick={() => handleLinkClick('/')} style={{ color: colors.primary }}>Home</div>
        <div className="menu_link" onClick={() => handleLinkClick('/about')} style={{ color: colors.primary }}>About</div>
        <div className="menu_link" onClick={() => handleLinkClick('/projects')} style={{ color: colors.primary }}>Projects</div>
        <div className="menu_link" onClick={() => handleLinkClick('/contact')} style={{ color: colors.primary }}>Contact</div>
        <div className="menu_link" onClick={() => handleLinkClick('/more')} style={{ color: colors.primary }}>More</div>
      </div>
    </div>
  );
}

export default Menu;
