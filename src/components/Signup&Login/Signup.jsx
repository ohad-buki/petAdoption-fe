import React, { useState, useContext, useRef } from "react";
import firebaseApp, { uploadAndGetImg, storage } from "../../firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import SwitchBtn from "./SwitchBtn";
import AppContext from "../../context/AppContext";
import Alert from "react-bootstrap/Alert";
import LoadSpinner from "../shered/LoadSpinner";
import { ref } from "firebase/storage";

export default function SignUp({ handleClose, setSignUpState, signUpState }) {
  const [signUpForm, setSignUpForm] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { setCurrentUser } = useContext(AppContext);
  const confirmPassRef = useRef();

  const handleChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    console.log(signUpForm);
    e.preventDefault();
    if (signUpForm.password === confirmPassRef.current.value) {
      try {
        const user = await axios.post(
          "http://localhost:5000/users/signUp",
          signUpForm
        );
        setCurrentUser(user.data[0]);
        setSignUpForm({});
        setError();
        handleClose(false);
      } catch (e) {
        setError(e.message);
      }
    } else {
      setError("passwords do not match");
    }
  };

  const handleImg = (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    const profileImgRef = ref(storage, `userImg/${file.name}`);
    uploadAndGetImg(profileImgRef, file).then((url) => {
      console.log(url);
      setSignUpForm({ ...signUpForm, photo_url: url });
      setIsLoading(false);
    });
  };

  return (
    <Form className="px-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          required
          name="email"
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
          name="password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          ref={confirmPassRef}
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
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="number"
          placeholder="Phone number"
          onChange={handleChange}
          name="phone"
          required
        />
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="age"
            placeholder="Age"
            onChange={handleChange}
            name="age"
            required
          />
        </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>About Me</Form.Label>
        <Form.Control
          type="text"
          placeholder="description"
          onChange={handleChange}
          name="description"
          required
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="file" onChange={handleImg} />
      </Form.Group>
      <div className="d-flex justify-content-between">
        <SwitchBtn setSignUpState={setSignUpState} signUpState={signUpState} />
        <div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {isLoading ? (
            <LoadSpinner />
          ) : (
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          )}
        </div>
      </div>
    </Form>
  );
}
