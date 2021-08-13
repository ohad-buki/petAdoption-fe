import React, { useRef, useContext, useState } from "react";
import Form from "react-bootstrap/Form";

export default function EditPetForm({ pet_id, weight, height, name }) {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [petEditForm, setPetEditForm] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const confirmPassRef = useRef();

  const handleChange = (e) => {
    setPetEditForm({ ...petEditForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const pet = await axios.put(
        `http://localhost:5000/pets/edit/${pet_id}`,
        petEditForm
      );
      setCurrentUser(pet.data[0]);
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
      console.log(url);
      setProfileEditForm({ ...profileEditForm, photo_url: url });
      setIsLoading(false);
    });
  };

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
