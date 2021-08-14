import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import PetCard from "../shered/PetCard.jsx";

export default function SearchPetsForm() {
  const [advenced, setAdvenced] = useState(false);
  const [searchForm, setSearchForm] = useState({});
  const [petList, setPetList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let query = "/?";
    const formArr = Object.entries(searchForm);
    try {
      if (formArr.length) {
        formArr.forEach(([key, value], i) => {
          if (i === 0) {
            query += `${key}=${value}`;
          } else {
            query += `&${key}=${value}`;
          }
        });
      }
      const pets = await axios.get(`http://localhost:5000/pets${query}`);
      console.log(pets);
      setPetList(pets.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    setAdvenced(!advenced);
  };

  return (
    <>
      <Form className="px-2 search-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            name="type"
            onChange={handleChange}
          >
            <option>type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </Form.Select>
        </Form.Group>
        {advenced && (
          <>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                name="status"
                onChange={handleChange}
              >
                <option>Adoption Status</option>
                <option value="1">Adopted</option>
                <option value="2">Available</option>
              </Form.Select>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Select
                aria-label="Default select example"
                name="breed"
                onChange={handleChange}
              >
                <option>Breed</option>
                <option value="1">bulldog</option>
                <option value="2">golden retriver</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                name="name"
                type="text"
                placeholder="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Height</Form.Label>
              <Form.Control
                name="heightRangeFrom"
                type="number"
                placeholder="from"
                onChange={handleChange}
              />
              <Form.Control
                name="heightRangeTO"
                type="number"
                placeholder="to"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                name="weightRangeFrom"
                type="number"
                placeholder="from"
                onChange={handleChange}
              />
              <Form.Control
                name="weightRangeTO"
                type="number"
                placeholder="to"
                onChange={handleChange}
              />
            </Form.Group>
          </>
        )}
        <div className="d-flex">
          <Form.Check
            type="checkbox"
            id={`default-checkBox`}
            label={`advanced search`}
            onChange={handleCheck}
          />
        </div>
        <Button type="submit" variant="outline-success" className="search-btn">
          Search
        </Button>
      </Form>
      <div className="search-results">
        {petList &&
          petList.length > 0 &&
          petList.map((pet) => {
            return (
              <PetCard
                key={pet.pet_id}
                img={pet.photo_url}
                name={pet.name}
                type={pet.type}
                status={pet.status}
                pet_id={pet.pet_id}
              />
            );
          })}
      </div>
    </>
  );
}
