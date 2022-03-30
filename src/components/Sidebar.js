import React, { useState } from "react";
import SocialFooter from "./SocialFooter";
import { MdAccountTree } from "react-icons/md";
import { IconContext } from "react-icons";
import { Button } from "react-bootstrap";

const PathSection = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="path-container">
      <Button
        className="path-button"
        onClick={() => {
          setShow(!show);
        }}
      >
        <IconContext.Provider
          value={{ size: "1.5rem", className: "path-button-icon" }}
        >
          <MdAccountTree /> Library
        </IconContext.Provider>
      </Button>
      {show && (
        <article className="path-modal">
          Library catalog available very soon
        </article>
      )}
    </div>
  );
};

const Sidebar = ({ isActive }) => {
  return (
    <section className="sidebar">
      <PathSection />
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
      <div className="sidebar-coffe-container">
        <h4 className="mt-5">Invite us a coffe</h4>
        <div className="sidebar-coffe-circle">
          <a href="https://www.buymeacoffee.com/andresbandA" target="_blank">
            <img src="coffe_transparent.png" className="sidebar-coffe-img" />
          </a>
        </div>
      </div>
      <div>
        <SocialFooter />
      </div>
    </section>
  );
};

export default Sidebar;
