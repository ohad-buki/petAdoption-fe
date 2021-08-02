import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function SearchUsersForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form className="px-2" onSubmit={handleSubmit}>
      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="User email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" placeholder="User Name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
      {/* <Button variant="primary" onClick={getAllUsers}>
        All Users
      </Button> */}
    </Form>
  );
}
