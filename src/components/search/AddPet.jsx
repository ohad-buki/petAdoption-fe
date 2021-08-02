import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function AddPet() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form className="px-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Type</option>
          <option value="1">dog</option>
          <option value="2">cat</option>
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="formGridPetName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group controlId="formGridAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAdoptionStatus">
        <Form.Label>Adoption Status</Form.Label>
        <Form.Control placeholder="Adoption Status" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridHeight">
        <Form.Label>Height</Form.Label>
        <Form.Control placeholder="Height" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAdoptionWeight">
        <Form.Label>Weight</Form.Label>
        <Form.Control placeholder="Weight" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAdoptionColor">
        <Form.Label>Color</Form.Label>
        <Form.Control placeholder="Color" />
      </Form.Group>
      <Form.Group controlId="formGriddietary restrictions">
        <Form.Label>dietary restrictions</Form.Label>
        <Form.Control placeholder="dietary restrictions" />
      </Form.Group>
      <Form.Group controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Hypoallergenic" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
