//old menu pull bottom
import React, { useState } from "react";
import './menu.css';

function Menu() {
  const [isPulldownOpen, setIsPulldownOpen] = useState(false);

  const togglePulldown = () => {
    setIsPulldownOpen(!isPulldownOpen);
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
        <div className="close-btn" onClick={togglePulldown}>✖</div>
        <div className="menu_link">Home</div>
        <div className="menu_link">About</div>
        <div className="menu_link">Projects</div>
        <div className="menu_link">Contact</div>
        <div className="menu_link">More</div>
      </div>
    </div>
  );
}

export default Menu;