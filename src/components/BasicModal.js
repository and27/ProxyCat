import React from "react";
import { Button, Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import ModalBody from "./ModalBody";

const BasicModal = ({ show, handleClose, handleActivation }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Button
          onClick={handleClose}
          style={{
            paddingBottom: "1rem",
            width: "40px",
            height: "40px",
            backgroundColor: "white",
            color: "black",
            borderColor: "black",
            borderRadius: "25px",
            position: "absolute",
            top: -10,
            right: -10,
            zIndex: 2,
          }}
        >
          <IoClose
            onClick={handleClose}
            style={{ cursor: "pointer", zIndex: 1 }}
          />
        </Button>
        <Modal.Body>
          <ModalBody handleActivation={handleActivation} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BasicModal;
