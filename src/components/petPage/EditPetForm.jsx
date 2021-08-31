import React, { useState } from "react";
import firebaseApp, { uploadAndGetImg, storage } from "../../firebase";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { ref } from "firebase/storage";
import LoadSpinner from "../shered/LoadSpinner";

export default function EditPetForm({ pet, handleClose, setCurrentPet }) {
  const { pet_id } = pet;
  const [petEditForm, setPetEditForm] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setPetEditForm({ ...petEditForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const pet = await axios.put(
        `${process.env.REACT_APP_HOST}/pets/edit/${pet_id}`,
        petEditForm
      );
      setCurrentPet(pet.data[0]);
      handleClose();
      setError();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleImg = (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    const profileImgRef = ref(storage, `userImg/${file.name}`);
    uploadAndGetImg(profileImgRef, file).then((url) => {
      setPetEditForm({ ...petEditForm, photo_url: url });
      setIsLoading(false);
    });
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
      <div className="d-flex justify-content-end">
        {isLoading ? (
          <LoadSpinner />
        ) : (
          <Button variant="success" type="submit">
            Submit
          </Button>
        )}
      </div>
    </Form>
  );
}
