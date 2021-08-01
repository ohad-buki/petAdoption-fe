import React, { useState } from "react";
import Login from "../Signup&Login/Login";
import SignUp from "../Signup&Login/Signup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

export default function ModalComp() {
  const [show, setShow] = useState(false);
  const [signUpState, setSignUpState] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    loginWithRedirect();
    setShow(false);
  };
  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Sign up/Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{signUpState ? "Sign Up" : "Login"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{signUpState ? <SignUp /> : <Login />}</Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button
            variant="outline-success"
            onClick={() => {
              setSignUpState(!signUpState);
            }}
          >
            {signUpState ? "Login" : "Sign Up"}
          </Button>
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
