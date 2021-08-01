import React, { useState, useContext } from "react";
import Login from "../Signup&Login/Login";
import SignUp from "../Signup&Login/Signup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EditForm from "./EditForm";
import AppContext from "../../context/AppContext";

export default function ModalEditProfile() {
  const [show, setShow] = useState(false);
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [newEmail, setNewEmail] = useState(currentUser.email);
  const [newName, setNewName] = useState(currentUser.name);
  const [newPass, setNewPass] = useState(currentUser.password);
  const [newAge, setNewAge] = useState(currentUser.age);
  const [newDescription, setNewDescription] = useState(currentUser.description);
  const [newImg, setNewImg] = useState(currentUser.profilePic);

  const handleSubmit = () => {
    setCurrentUser({
      name: newName,
      email: newEmail,
      password: newPass,
      age: newAge,
      description: newDescription,
      profilePic: newImg,
    });
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(currentUser);
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
          <EditForm
            newEmail={newEmail}
            setNewEmail={setNewEmail}
            newAge={newAge}
            setNewAge={setNewAge}
            newName={newName}
            setNewName={setNewName}
            newPass={newPass}
            setNewPass={setNewPass}
            newDescription={newDescription}
            setNewDescription={setNewDescription}
            newImg={newImg}
            setNewImg={setNewImg}
          />
        </Modal.Body>
        <Modal.Footer>
          <div>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-success" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
