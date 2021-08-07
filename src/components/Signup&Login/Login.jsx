import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import SwitchBtn from "./SwitchBtn";
import AppContext from "../../context/AppContext";
import Alert from "react-bootstrap/Alert";

export default function Login({ handleClose, setSignUpState, signUpState }) {
  const { setCurrentUser } = useContext(AppContext);
  const [loginForm, setLoginForm] = useState({});
  const [error, setError] = useState();
  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(
        "http://localhost:5000/users/login",
        loginForm
      );
      setCurrentUser(user.data);
      console.log(user.data);
      setLoginForm({});
      handleClose(false);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Form className="px-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
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
          name="password"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <div className="d-flex justify-content-between">
        <SwitchBtn setSignUpState={setSignUpState} signUpState={signUpState} />
        <div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            disabled={loginForm.email && loginForm.password ? false : true}
            variant="outline-success"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
}
