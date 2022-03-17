import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { FaRedo } from "react-icons/fa";
import infoSnacks from "../SnacksContent";
import InfoContainer from "./InfoContainer";

const MainContainer = () => {
  const [attempts, setAttempts] = useState(3);
  const [rand, setRand] = useState(0);
  const [animate, setAnimate] = useState("");

  //TODO: handle true random snacks
  const min = 0;
  const max = 2;
  const setNewRand = () => {
    // const randNumber = Math.floor(Math.random() * (max - min)) + min
    setRand((rand + 1) % 3);
  };

  const animationTimeOut = async () => {
    setTimeout(() => {
      setAnimate("animate");
    }, 400);
  };

  const animateInfo = async () => {
    setAnimate("");
    animationTimeOut();
  };

  //The first time component loads we run animationTimeOut to display content with animation
  useEffect(() => {
    setNewRand();
    animationTimeOut();
  }, []);

  const handleNewSnack = () => {
    if (attempts > 0) {
      setAttempts(attempts - 1);
      setNewRand();
      animateInfo();
    }
  };
  return (
    <>
      <section className="global-container">
        <header>
          <img src="logo.png" className="main-logo" />
        </header>
        <h1 className="mt-5 snack-title">{infoSnacks[rand].title}</h1>
        <div className="snack-container">
          <div className="snack-info">
            {infoSnacks[rand].snacks.map((info, idx) => (
              <InfoContainer
                animate={animate}
                key={idx}
                subtitle={info.subtitle}
                description={info.description}
                imageUrl={info.imageUrl}
              />
            ))}
          </div>
          <div>
            <img
              aria-label="cat profile picture"
              src="programmingCat.png"
              className="snack-image"
            />
            <div style={{ position: "relative" }}>
              <Button className="snack-button" onClick={handleNewSnack}>
                <FaRedo style={{ marginRight: "10px" }} />
                Get snack
              </Button>
              <p>You have {attempts} attemps left</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContainer;
