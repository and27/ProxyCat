import React from "react";
import SocialFooter from "./SocialFooter";
import { MdAccountTree } from "react-icons/md";
import { IconContext } from "react-icons";
import { Button } from "react-bootstrap";

const Sidebar = ({ isActive }) => {
  return (
    <section className="sidebar">
      <div>
        <h2 className="mt-5">About</h2>
        <img
          aria-label="cat profile picture"
          src="ProfilePicture.png"
          className="sidebar-profile-img"
        />
        {isActive && <p className="sidebar-badge">PRO</p>}
        <p className="sidebar-about">
          ProxyCat provides actionable tips and tricks about frontend
          programming (design, security, accesibility, and much more). The
          project is maintained by{" "}
          <a href="https://andresbanda.com" target="_blank">
            <strong>Andrés Banda</strong>
          </a>
          .
        </p>
      </div>
      <div>
        <Button className="path-button" onClick={() => {}}>
          <IconContext.Provider value={{ size: "2rem", color: "#352971" }}>
            <MdAccountTree />
          </IconContext.Provider>
        </Button>
      </div>
      <div className="sidebar-coffe-container">
        <h4 className="mt-5">Invite us a coffe</h4>
        <div className="sidebar-coffe-circle">
          <img src="coffe_transparent.png" className="sidebar-coffe-img" />
        </div>
      </div>
      <div>
        <SocialFooter />
      </div>
    </section>
  );
};

export default Sidebar;
