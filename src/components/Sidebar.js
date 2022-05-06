import React, { useState } from "react";
import CategoriesModal from "./CategoriesModal";
import SettingsMenu from "./SettingsMenu";
import SocialFooter from "./SocialFooter";

const Sidebar = ({ isActive, isHidden }) => {
  const [showCategories, setShowCategories] = useState(false);

  const handleCloseCategories = () => setShowCategories(false);
  const handleShowCategories = () => {
    setShowCategories(true);
  };
  return (
    <section className={`sidebar ${isHidden && "sidebar-hide"}`}>
      <CategoriesModal
        show={showCategories}
        handleClose={handleCloseCategories}
      />
      <SettingsMenu handleShowCategories={handleShowCategories} />
      <div>
        <h2 className="mt-5">About</h2>
        <img
          aria-label="cat profile picture"
          src="ProfilePicture.png"
          className="sidebar-profile-img"
        />
        {isActive && <p className="sidebar-badge">Premium</p>}
        <p className="sidebar-about">
          ProxyCat provides actionable tips and tricks about frontend
          programming (design, security, accesibility, and much more).
        </p>
      </div>
      <div className="sidebar-coffe-container">
        <h4 className="mt-5">Invite us a coffe</h4>
        <div className="sidebar-coffe-circle">
          <a href="https://www.buymeacoffee.com/andresbandA" target="_blank">
            <img src="coffe_transparent.png" className="sidebar-coffe-img" />
          </a>
        </div>
      </div>
      <div>
        <p className="pt-3" style={{ fontSize: "13px" }}>
          Created by{" "}
          <a href="https://andresbanda.com" target="_blank">
            <strong>Andrés Banda</strong>
          </a>
        </p>
        <SocialFooter />
      </div>
    </section>
  );
};

export default Sidebar;
