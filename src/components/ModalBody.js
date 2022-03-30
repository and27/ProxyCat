import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ModalBody = ({ handleActivation }) => {
  const [code, setCode] = useState("");

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
        <li>Get access to all snacks related to the categories you choose.</li>
        <li>Download snacks as images.</li>

        <li>Get free access to 3 Proxy Days.</li>
        <li>
          Get access to special discounts and promotions in our courses and
          events.
        </li>
      </ul>
      <Form.Group className="d-flex align-items-center">
        <Form.Label>License</Form.Label>
        <Form.Control
          className="ml-2"
          style={{ borderRadius: "25px" }}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        ></Form.Control>
        <Button className="ml-2 dark-button" onClick={handleActivation(code)}>
          Activate
        </Button>
      </Form.Group>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=593994614769&text=Hola, estoy interesado en acceder al contenido de ProxyCat."
      >
        <Button
          className="snack-button"
          style={{ padding: "0.75rem 2rem", marginTop: "1rem" }}
        >
          Get more information
        </Button>
      </a>
    </div>
  );
};

export default ModalBody;
