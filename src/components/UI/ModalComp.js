import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComp = ({ openFlag, modalBody, modalTitle }) => {
  const [show, setShow] = useState(openFlag);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComp;
