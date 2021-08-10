import React, { useRef, useState, useContext } from "react";
import firebaseApp, { uploadAndGetImg, storage } from "../../firebase";
import Form from "react-bootstrap/Form";
import AppContext from "../../context/AppContext";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { ref } from "firebase/storage";
import LoadSpinner from "../shered/LoadSpinner";

export default function EditUserForm({ handleClose }) {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [profileEditForm, setProfileEditForm] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const confirmPassRef = useRef();
  const handleChange = (e) => {
    setProfileEditForm({ ...profileEditForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (profileEditForm.password === confirmPassRef.current.value) {
      try {
        console.log(profileEditForm);
        const user = await axios.put(
          `http://localhost:5000/users/edit/${currentUser.user_id}`,
          profileEditForm
        );
        setCurrentUser(user.data);
        handleClose();
        setError();
      } catch (err) {
        setError(err.message);
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
      setProfileEditForm({ ...profileEditForm, photo_url: url });
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
          name="password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          ref={confirmPassRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          onChange={handleChange}
          name="age"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>About Me</Form.Label>
        <Form.Control
          type="text"
          placeholder="description"
          onChange={handleChange}
          name="description"
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3" onChange={handleImg}>
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="d-flex justify-content-end">
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
