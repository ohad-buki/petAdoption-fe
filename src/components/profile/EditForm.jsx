import React, { useRef } from "react";
import Form from "react-bootstrap/Form";

export default function EditForm({
  newEmail,
  setNewEmail,
  newAge,
  setNewAge,
  newName,
  setNewName,
  newPass,
  setNewPass,
  newDescription,
  setNewDescription,
  newImg,
  setNewImg,
}) {
  // const emailRef = useRef();
  // const nameRef = useRef();
  // const passRef = useRef();
  // const ageRef = useRef();
  // const descRef = useRef();
  const confPassRef = useRef();

  const handleEmail = (e) => {
    setNewEmail(e.target.value);
  };
  const handleName = (e) => {
    setNewName(e.target.value);
  };
  const handlePass = (e) => {
    setNewPass(e.target.value);
  };
  const handleAge = (e) => {
    setNewAge(e.target.value);
  };
  const handleDesc = (e) => {
    setNewDescription(e.target.value);
  };
  const handleImg = (e) => {};

  return (
    <Form className="px-2">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={newEmail}
          onChange={handleEmail}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={newPass}
          onChange={handlePass}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          ref={confPassRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full Name"
          value={newName}
          onChange={handleName}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          value={newAge}
          onChange={handleAge}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>About Me</Form.Label>
        <Form.Control
          type="text"
          placeholder="description"
          value={newDescription}
          onChange={handleDesc}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3" onChange={handleImg}>
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Form>
  );
}
