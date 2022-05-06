import React, { useContext, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FiSettings } from "react-icons/fi";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoLanguage, IoListCircle } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { themeContext } from "../App";

const SettingsMenu = ({ handleShowCategories }) => {
  const [show, setShow] = useState(false);
  const { darkTheme, setDarkTheme } = useContext(themeContext);
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
          <FiSettings />
        </IconContext.Provider>
      </Button>
      {show && (
        <article className="path-modal px-2 py-3" style={{ minWidth: "250px" }}>
          <p className="ml-3 text-left">Settings</p>
          <hr className="m-2" />
          <Container>
            <Row className="justify-content-between m-0">
              <Row className="align-items-center  m-0">
                <IoLanguage />
                <p className="mb-0 ml-2">Language</p>
              </Row>
              <Row className="align-items-center m-0 menu-selected">
                <p className="mb-0">English</p>
                <RiArrowDropRightLine size="26" />
              </Row>
            </Row>
            <Row className="justify-content-between m-0">
              <Row className="align-items-center m-0">
                <MdDarkMode />
                <p className="mb-0 ml-2">Dark Theme</p>
              </Row>
              <Form.Check
                className="m-0 p-0"
                type="switch"
                id={"test"}
                label={""}
                onClick={() => {
                  setDarkTheme(!darkTheme);
                }}
              />
            </Row>
            <Row className="justify-content-between m-0">
              <Row className="align-items-center m-0">
                <IoListCircle />
                <p className="mb-0 ml-2">Categories</p>
              </Row>
              <Row
                className="align-items-center m-0 menu-selected"
                onClick={handleShowCategories}
              >
                <p className="mb-0">2/7</p>
                <RiArrowDropRightLine size="26" />
              </Row>
            </Row>
          </Container>
        </article>
      )}
    </div>
  );
};
export default SettingsMenu;
