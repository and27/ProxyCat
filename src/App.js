import { useEffect, useState } from "react";
import "./css/index.css";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";
import ReactGA from "react-ga";

function App() {
  const [isActive, setIsActive] = useState();
  useEffect(() => {
    ReactGA.initialize("UA-169983922-2", {
      gaOptions: {
        siteSpeedSampleRate: 100,
      },
    });
  }, []);
  return (
    <div className="App">
      <MainContainer setIsActive={setIsActive} isActive={isActive} />
      <Sidebar isActive={isActive} />
    </div>
  );
}

export default App;
