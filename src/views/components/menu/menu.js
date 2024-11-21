import React, { useState, useEffect } from "react";
import './menu.css';
import { Link, useNavigate } from "react-router-dom";
import colors from "../../../assets/colors/colors";
import discord from "../../../assets/logos/discord.png"
import instagram from "../../../assets/logos/instagram.png"
import linkedin from "../../../assets/logos/linkedin.png"
import github from "../../../assets/logos/github.png"


function Menu() {
  const navigate = useNavigate();
  const [isPulldownOpen, setIsPulldownOpen] = useState(false);

  const togglePulldown = () => {
    setIsPulldownOpen(!isPulldownOpen);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setIsPulldownOpen(false);
  };

  useEffect(() => {
    if (isPulldownOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isPulldownOpen]);

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
        <div>
          <div className="close-btn" onClick={togglePulldown} style={{ color: colors.primary }}>✖</div>
          <div className="menu_link margin_top_menu" onClick={() => handleLinkClick('/')} style={{ color: colors.primary }}>Home</div>
          <div className="menu_link" onClick={() => handleLinkClick('/about')} style={{ color: colors.primary }}>About</div>
          <div className="menu_link" onClick={() => handleLinkClick('/projects')} style={{ color: colors.primary }}>Projects</div>
          <div className="menu_link" onClick={() => handleLinkClick('/contact')} style={{ color: colors.primary }}>Contact</div>
          <div className="menu_link" onClick={() => handleLinkClick('/more')} style={{ color: colors.primary }}>More</div>
        </div>
        <div className="menu_links_socials">
          <div><Link to="https://discord.gg/5KEARqNJux" target="_blank"><img src={discord}/></Link></div>
          <div><Link to="https://www.instagram.com/hugo_paynaud/" target="_blank"><img src={instagram}/></Link></div>
          <div><Link to="https://www.linkedin.com/in/hugo-paynaud/" target="_blank"><img src={linkedin}/></Link></div>
          <div><Link to="https://github.com/Kurdant" target="_blank"><img src={github}/></Link></div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
