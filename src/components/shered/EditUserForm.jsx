import React from "react";
import Form from "react-bootstrap/Form";

export default function EditUserForm({
  profileEditSub,
  setProfileEditSub,
  setConfPass,
}) {
  const handleChange = (e) => {
    setProfileEditSub({ ...profileEditSub, [e.target.name]: e.target.value });
  };

  const handleImg = (e) => {};

  return (
    <Form className="px-2">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          // value={newEmail}
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
          // value={newPass}
          onChange={handleChange}
          name="password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfPass(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full Name"
          // value={newName}
          onChange={handleChange}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          // value={newAge}
          onChange={handleChange}
          name="age"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>About Me</Form.Label>
        <Form.Control
          type="text"
          placeholder="description"
          // value={newDescription}
          onChange={handleChange}
          name="description"
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3" onChange={handleImg}>
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Form>
  );
}
