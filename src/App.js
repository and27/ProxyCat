import { useEffect, useState, createContext } from "react";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";
import ReactGA from "react-ga";
import "./css/index.css";

export const themeContext = createContext();

function App() {
  const [isActive, setIsActive] = useState();
  const [hideSidebar, setHideSidebar] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    ReactGA.initialize("UA-169983922-2", {
      gaOptions: {
        siteSpeedSampleRate: 100,
      },
    });
  }, []);

  return (
    <div className="App">
      <themeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <MainContainer
          setIsActive={setIsActive}
          isActive={isActive}
          setHideSidebar={setHideSidebar}
          sidebar={hideSidebar}
        />
        <Sidebar isActive={isActive} isHidden={hideSidebar} />
      </themeContext.Provider>
    </div>
  );
}

export default App;
