import React, { useState, useContext, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EditUserForm from "./EditUserForm";
import AppContext from "../../context/AppContext";

export default function ModalEditProfile() {
  const [show, setShow] = useState(false);
  const [confPass, setConfPass] = useState();
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [profileEditSub, setProfileEditSub] = useState({});

  const handleSubmit = () => {
    setCurrentUser({
      ...currentUser,
      ...profileEditSub,
    });
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="outline-success"
        className="edit-profile-btn"
        onClick={handleShow}
      >
        Edit Profile
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            profileEditSub={profileEditSub}
            setProfileEditSub={setProfileEditSub}
            confPass={confPass}
            setConfPass={setConfPass}
          />
        </Modal.Body>
        <Modal.Footer>
          <div>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              disabled={confPass === profileEditSub.password ? false : true}
              variant="outline-success"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
