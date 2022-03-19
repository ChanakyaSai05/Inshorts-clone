import React from "react";
import "./Nav.css";
import TemporaryDrawer from "./HamburgerDrawer";
function Nav({ setCategory }) {
  return (
    <div className="nav">
      <div className="menu">
        <TemporaryDrawer setCategory={setCategory} />
      </div>
      <img
        className="nav_image"
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="logo"
      />
    </div>
  );
}

export default Nav;
