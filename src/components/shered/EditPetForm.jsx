import React, { useRef } from "react";
import Form from "react-bootstrap/Form";

export default function EditPetForm() {
  return (
    <Form className="px-2">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full Name"
          //   value={newName}
          //   onChange={handleName}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          //   value={newAge}
          //   onChange={handleAge}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>About Me</Form.Label>
        <Form.Control
          type="text"
          placeholder="description"
          //   value={newDescription}
          //   onChange={handleDesc}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Form>
  );
}
