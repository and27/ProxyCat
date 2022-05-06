import React from "react";
import { Button, Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import ModalBody from "./ModalBody";

const BasicModal = ({ show, handleClose, handleActivation }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Button className="button-modal" onClick={handleClose}>
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
