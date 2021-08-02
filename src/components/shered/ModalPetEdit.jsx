import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EditPetForm from "./EditPetForm";
import AppContext from "../../context/AppContext";

export default function ModalPetEdit() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="outline-success"
        className="edit-profile-btn"
        onClick={handleShow}
      >
        Edit Pet
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditPetForm />
        </Modal.Body>
        <Modal.Footer>
          <div>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-success" onClick={handleClose}>
              Submit
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
