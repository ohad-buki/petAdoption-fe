import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EditPetForm from "./EditPetForm";

export default function ModalPetEdit({ pet, setCurrentPet }) {
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
          <EditPetForm
            pet={pet}
            handleClose={handleClose}
            setCurrentPet={setCurrentPet}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
