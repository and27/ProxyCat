import { useState } from "react";
import "./css/index.css";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";

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
