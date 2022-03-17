import "./App.css";

import MainContainer from "./components/MainContainer";
import SocialFooter from "./components/SocialFooter";

const Sidebar = () => {
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
          <p className="sidebar-content">
            ProxyCat provides actionable tips and tricks about frontend
            programming (design, security, accesibility, and much more). The
            project is maintained by <strong>Andrés Banda</strong>.
          </p>
        </div>
        <div>
          <h4 className="mt-5">Invites us a coffe</h4>
          <img src="coffe.png" className="sidebar-coffe-img" />
        </div>
        <div>
          <SocialFooter />
        </div>
      </section>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <MainContainer />
      <Sidebar />
    </div>
  );
}

export default App;
