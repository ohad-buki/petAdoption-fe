import React, { useState } from "react";
import Login from "../Signup&Login/Login";
import SignUp from "../Signup&Login/Signup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalComp() {
  const [show, setShow] = useState(false);
  const [signUpState, setSignUpState] = useState(false);
  const [error, setError] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Sign up/Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{signUpState ? "Sign Up" : "Login"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {signUpState ? (
            <SignUp
              handleClose={handleClose}
              setSignUpState={setSignUpState}
              signUpState={signUpState}
            />
          ) : (
            <Login
              handleClose={handleClose}
              setSignUpState={setSignUpState}
              signUpState={signUpState}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
