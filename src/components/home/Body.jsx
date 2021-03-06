import React, { useContext, useState, useEffect } from "react";
import "./body.css";
import PetCard from "../shered/PetCard";
import { Link } from "react-router-dom";
import axios from "axios";
import AppContext from "../../context/AppContext";

export default function Body() {
  const [petList, setPetList] = useState([]);
  const { currentUser } = useContext(AppContext);

  useEffect(async () => {
    try {
      const pets = await axios.get(
        `${process.env.REACT_APP_HOST}/pets/limit/3`
      );
      setPetList(pets.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="d-flex justify-content-center body-wrapper flex-column">
      <h1>Pets available for adoption</h1>
      <div className="pets-wrapper">
        {(petList &&
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
          })) ||
          "Something went worng"}
        <div className="suggestion d-flex flex-column justify-content-center p-4">
          <Link to="/search">
            <div className="suggestion-all-pets">Search all pets</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
