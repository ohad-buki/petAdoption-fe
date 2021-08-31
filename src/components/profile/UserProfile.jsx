import React, { useContext, useEffect, useState } from "react";
import "./UserProfile.css";
import ProfilePic from "../shered/ProfilePic";
import PetCard from "../shered/PetCard";
import ModalEditProfile from "./ModalEditProfile";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AppContext from "../../context/AppContext";
import axios from "axios";

export default function UserProfile() {
  const { currentUser } = useContext(AppContext);
  const [petList, setPetList] = useState([]);
  const [renderdList, setRenderdList] = useState([]);
  const [filterBy, setFilterBy] = useState();
  const [likedList, setLikedList] = useState();

  useEffect(async () => {
    try {
      const pets = await axios.get(
        `${process.env.REACT_APP_HOST}/pets/?user_id=${currentUser.user_id}`
      );
      const likedPets = await axios.get(
        `${process.env.REACT_APP_HOST}/likes/getPetsByUser/${currentUser.user_id}`
      );
      setLikedList(likedPets.data);
      setPetList(pets.data);
    } catch (e) {
      console.log(e);
    }
  }, [renderdList]);

  const handleFilter = (e) => {
    setFilterBy(e.target.name);
  };

  useEffect(() => {
    if (filterBy) {
      if (filterBy === "liked") {
        setRenderdList(likedList);
      } else {
        const filterdList = petList.filter((pet) => {
          return pet.status === filterBy;
        });
        setRenderdList(filterdList);
      }
    }
  }, [filterBy]);

  return (
    <div className="profile-wrapper d-flex justify-content-center">
      <div className="box-wrapper">
        <div className="img-wrapper">
          <ProfilePic url={currentUser.photo_url} />
        </div>
        <div className="edit-profile-btn-wrapper">
          <ModalEditProfile />
        </div>
        <div className="profile-name">{currentUser.name}</div>
        <div className="about-me">{currentUser.description}</div>
        <div className="pets-i-like d-flex justify-content-center">
          <div className="my-fav-pets d-flex flex-column justify-content-center">
            <div className="btns-wrapper mt-4">
              <ButtonGroup aria-label="Basic example">
                <Button
                  variant="outline-success"
                  className="search-btn"
                  name="adopted"
                  onClick={handleFilter}
                >
                  Adopted
                </Button>
                <Button
                  variant="outline-success"
                  className="search-btn"
                  name="fosterd"
                  onClick={handleFilter}
                >
                  Fosterd
                </Button>
                <Button
                  variant="outline-success"
                  className="search-btn"
                  name="liked"
                  onClick={handleFilter}
                >
                  Liked
                </Button>
              </ButtonGroup>
            </div>
            <div className="pets-wrapper">
              {(renderdList &&
                renderdList.length > 0 &&
                renderdList.map((pet) => {
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
                "chose what pets to show"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
