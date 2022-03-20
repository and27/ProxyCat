import { useState } from "react";
import "./App.css";

import MainContainer from "./components/MainContainer";
import SocialFooter from "./components/SocialFooter";

const Sidebar = ({ isActive }) => {
  return (
    <>
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
        <div className="sidebar-coffe-container">
          <h4 className="mt-5">Invites us a coffe</h4>
          <div className="sidebar-coffe-circle">
            <img src="coffe_transparent.png" className="sidebar-coffe-img" />
          </div>
        </div>
        <div>
          <SocialFooter />
        </div>
      </section>
    </>
  );
};

function App() {
  const [isActive, setIsActive] = useState();

  return (
    <div className="App">
      <MainContainer setIsActive={setIsActive} isActive={isActive} />
      <Sidebar isActive={isActive} />
    </div>
  );
}

export default App;
