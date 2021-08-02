import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SearchPetsForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form className="px-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Adoption Status</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Select aria-label="Default select example">
          <option>Breed</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Select aria-label="Default select example">
          <option>Name</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit" variant="outline-success" className="search-btn">
        Search
      </Button>
    </Form>
  );
}