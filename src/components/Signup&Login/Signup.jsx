import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import SwitchBtn from "./SwitchBtn";

export default function SignUp({ handleClose, setSignUpState, signUpState }) {
  const [signUpForm, setSignUpForm] = useState({});
  const handleChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
    console.log("1");
  };
  const handleSubmit = async (e) => {
    console.log(signUpForm);
    e.preventDefault();
    // axios.post("http://localhost:5000/users/signUp");

    setSignUpForm({});
    handleClose(false);
  };
  return (
    <Form className="px-2">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          required
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
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>About Me</Form.Label>
        <Form.Control
          type="text"
          placeholder="description"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <div className="d-flex justify-content-between">
        <SwitchBtn setSignUpState={setSignUpState} signUpState={signUpState} />
        <div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
}
