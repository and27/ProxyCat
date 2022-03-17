import React from "react";
import { Button, Form } from "react-bootstrap";

const ModalBody = () => {
  return (
    <div className="text-center m-3">
      <header>
        <p>You do not have more snacks for today</p>
        <h1>Want to get ilimited access?</h1>
      </header>
      <p>
        Become a member. Support the project and get ilimited access to all the
        tips and tricks organized by categories.
      </p>
      <img src="library.png" style={{ width: "50%", margin: "0 0 1rem 0" }} />
      <ul className="text-left">
        <li>
          Get access to special discount and promotions in our courses and
          events.
        </li>
        <li>Get access to montly cheatsheets.</li>
        <li>
          Get access to special discount and promotions in our courses and
          events.
        </li>
      </ul>
      <Form.Group className="d-flex align-items-center">
        <Form.Label>License</Form.Label>
        <Form.Control
          className="ml-2"
          style={{ borderRadius: "25px" }}
        ></Form.Control>
        <Button className="ml-2 dark-button">Activate</Button>
      </Form.Group>
      <Button
        className="snack-button"
        style={{ padding: "0.75rem 2rem", marginTop: "1rem" }}
      >
        Get more information
      </Button>
    </div>
  );
};

export default ModalBody;
