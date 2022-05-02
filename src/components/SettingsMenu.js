import React, { useContext, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FiSettings } from "react-icons/fi";
import { IoLanguage, IoListCircle } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { themeContext } from "../App";

const SettingsMenu = () => {
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
        <article className="path-modal" style={{ minWidth: "200px" }}>
          <p className="m-0 text-left">Settings</p>
          <hr className="m-2" />
          <Container>
            <Row className="align-items-center justify-content-between">
              <IoLanguage />
              <p className="mb-0">Language</p>
              <p className="text-secondary mb-0">English</p>
            </Row>
            <Row className="align-items-center justify-content-between">
              <MdDarkMode />
              <p className="mb-0">Dark Theme</p>
              <Form.Check
                type="switch"
                id={"test"}
                label={""}
                onClick={() => {
                  setDarkTheme(!darkTheme);
                }}
              />
            </Row>
            <Row className="align-items-center justify-content-between">
              <IoListCircle />
              <p className="mb-0">Categories</p>
              <p className="text-secondary mb-0">2/7</p>
            </Row>
          </Container>
        </article>
      )}
    </div>
  );
};
export default SettingsMenu;
