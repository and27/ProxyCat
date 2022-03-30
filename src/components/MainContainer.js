import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaRedo, FaRegEye, FaRegHeart } from "react-icons/fa";
import infoSnacks from "../SnacksContent";
import BasicModal from "./BasicModal";
import InfoContainer from "./InfoContainer";
import ReactGA from "react-ga";

const MainContainer = ({ isActive, setIsActive }) => {
  const [attempts, setAttempts] = useState(0);
  const [rand, setRand] = useState(0);
  const [animate, setAnimate] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //Actions Banner
  const [views, setViews] = useState(10);
  const [likes, setLikes] = useState(10);

  const getCustomRand = (max, offset) => {
    const randResult = Math.floor(Math.random() * max + offset);
    return randResult;
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  useEffect(() => {
    const viewsNumber = getCustomRand(100, 30);
    setViews(viewsNumber);
    const likes = getCustomRand(30, 3);
    setLikes(likes);
  }, [attempts]);

  const handleLikes = () => {
    if (localStorage.getItem("likes") === null) {
      setLikes(likes + 1);
      localStorage.setItem("likes", 1);
    }
  };
  //TODO: handle true random snacks
  const min = 0;
  const max = 2;
  const setNewRand = () => {
    // const randNumber = Math.floor(Math.random() * (max - min)) + min
    setRand((rand + 1) % 7);
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
    if (attempts > 2 && !isActive) {
      handleShow();
    } else {
      setAttempts(attempts + 1);
      setNewRand();
      animateInfo();
    }
  };

  const handleActivation = (code) => {
    if (code === "123qweasd") {
      setShow(false);
      setIsActive(true);
    }
  };

  const ActionsBanner = ({ views, likes }) => {
    return (
      <div
        className="d-flex mb-2 justify-content-around"
        style={{ width: "40%" }}
      >
        <div className="d-flex align-items-center">
          <IconContext.Provider value={{ className: "action-icon" }}>
            <FaRegEye />
          </IconContext.Provider>
          <p className="m-0 ml-2 action-banner-text">{views}</p>
        </div>
        <div className="d-flex align-items-center">
          <IconContext.Provider value={{ className: "action-icon" }}>
            <FaRegHeart onClick={handleLikes} />
          </IconContext.Provider>

          <p className="m-0 ml-2 action-banner-text">{likes}</p>
        </div>
        {/* TODO: Add download icon */}
        {/* <div className="d-flex align-items-center">
          <IconContext.Provider value={{ className: "action-icon" }}>
            <FaRegStar />
          </IconContext.Provider>

          <p className="m-0 ml-2 action-banner-text">12</p>
        </div> */}
      </div>
    );
  };

  return (
    <>
      <BasicModal
        show={show}
        handleClose={handleClose}
        handleActivation={handleActivation}
      />
      <section className="global-container">
        <header>
          <img src="proxycat_logo.svg" className="main-logo" />
          <p className=" mb-0 header-subtitle">FRONTEND TIPS</p>
          <p className="">BETA</p>
        </header>
        <h1 className="mt-4 snack-title">{infoSnacks[rand].title}</h1>
        <p className="snack-category">{infoSnacks[rand].category}</p>
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
          <div className="d-flex flex-column align-items-center">
            <img
              aria-label="cat profile picture"
              src="programmingCat.png"
              className="snack-image"
            />
            <ActionsBanner views={views} likes={likes} />
            <div style={{ position: "relative" }}>
              <Button className="snack-button" onClick={handleNewSnack}>
                <FaRedo style={{ marginRight: "10px" }} />
                Get snack
              </Button>
              {!isActive && (
                <p className="snack-attempts">
                  {" "}
                  {3 - attempts} snacks left today.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContainer;
