import React, { useState } from "react";
import firebaseApp from "../../firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ref } from "firebase/storage";
import { uploadAndGetImg, storage } from "../../firebase";
import LoadSpinner from "../shered/LoadSpinner";
import axios from "axios";

export default function AddPet() {
  const [addPetForm, setAddPetForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "hypoallergenic") {
      setAddPetForm({ ...addPetForm, [e.target.name]: e.target.checked });
    } else {
      setAddPetForm({ ...addPetForm, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(addPetForm);
    try {
      const res = await axios.post(
        "http://localhost:5000/pets/addPet",
        addPetForm
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setIsLoading(true);
      const file = e.target.files[0];
      const petImgRef = ref(storage, `petImg/${file.name}`);
      uploadAndGetImg(petImgRef, file).then((url) => {
        console.log(url);
        setAddPetForm({ ...addPetForm, photo_url: url });
        setIsLoading(false);
      });
    } else {
      setAddPetForm({ ...addPetForm, photo_url: undefined });
    }
  };

  return (
    <Form className="px-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Select
          aria-label="Default select example"
          name="type"
          onChange={handleChange}
        >
          <option value="0">Type</option>
          <option value="dog">dog</option>
          <option value="cat">cat</option>
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="formGridPetName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formGridAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          name="age"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridHeight">
        <Form.Label>Height</Form.Label>
        <Form.Control
          placeholder="Height"
          name="height"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAdoptionWeight">
        <Form.Label>Weight</Form.Label>
        <Form.Control
          placeholder="Weight"
          name="weight"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAdoptionColor">
        <Form.Label>Color</Form.Label>
        <Form.Control
          placeholder="Color"
          name="color"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formGriddietary restrictions">
        <Form.Label>Dietary restrictions</Form.Label>
        <Form.Control
          placeholder="Dietary restrictions"
          name="dietary_restrictions"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <div className="d-flex justify-content-center">
          <Form.Check
            type="checkbox"
            label="Hypoallergenic"
            name="hypoallergenic"
            onChange={handleChange}
          />
        </div>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="file" onChange={handleImg} />
      </Form.Group>
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <Button variant="dark" type="submit">
          Submit
        </Button>
      )}
    </Form>
  );
}
