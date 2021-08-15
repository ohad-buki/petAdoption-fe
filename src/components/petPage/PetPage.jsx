import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AppContext from "../../context/AppContext";
import axios from "axios";
import ModalPetEdit from "./ModalPetEdit";
import "./petPage.css";

export default function PetPage() {
  const { currentUser } = useContext(AppContext);
  const [currentPet, setCurrentPet] = useState();
  const { id } = useParams();

  useEffect(async () => {
    console.log(id);
    try {
      const pet = await axios.get(`http://localhost:5000/pets/?pet_id=${id}`);
      setCurrentPet(pet.data[0]);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleClick = async (e) => {
    try {
      const pet = await axios.put(
        `http://localhost:5000/pets/edit/${currentPet.pet_id}`,
        {
          status: e.target.name,
          user_id: e.target.name === "available" ? 0 : currentUser.user_id,
        }
      );
      setCurrentPet(pet.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {currentPet && (
        <div className="profile-wrapper d-flex justify-content-center">
          <div className="box-wrapper pet-profile d-flex flex-row">
            <div className="pet-image">
              <img src={currentPet.photo_url} />
            </div>
            <div className="pet-info">
              <div className="info-line pet-name d-flex flex-row">
                <h4>Name</h4>
                <h4>{currentPet.name}</h4>
              </div>
              <div className="info-line d-flex flex-row">
                <h4>Type</h4>
                <h4>{currentPet.type}</h4>
              </div>
              <div className="info-line d-flex flex-row">
                <h4>Age</h4>
                <h4>{currentPet.age}</h4>
              </div>
              <div className="info-line d-flex flex-row">
                <h4>Height</h4>
                <h4>{currentPet.height}cm</h4>
              </div>
              <div className="info-line d-flex flex-row">
                <h4>Weight</h4>
                <h4>{currentPet.weight}kg</h4>
              </div>
              <div className="info-line d-flex flex-row">
                <h4>Color</h4>
                <h4>{currentPet.color}</h4>
              </div>
              <div className="info-line d-flex flex-row">
                <h4>Dietary restrictions</h4>
                <h4>{currentPet.dietary_restrictions}</h4>
              </div>
              <div className="info-line d-flex flex-row">
                <h4>Hypoallergenic</h4>
                <h4>{currentPet.hypoallergenic ? "yes" : "no"}</h4>
              </div>
              <div className="info-line d-flex flex-row">
                <h4>Status</h4>
                <h4>{currentPet.status}</h4>
              </div>
              <div className="btn-group-wrapper">
                {currentUser && (
                  <ButtonGroup aria-label="Basic example">
                    {currentUser.is_admin && (
                      <ModalPetEdit
                        pet={currentPet}
                        setCurrentPet={setCurrentPet}
                      />
                    )}
                    {currentPet.status === "available" && (
                      <Button
                        variant="outline-success"
                        name="adopted"
                        className="search-btn"
                        onClick={handleClick}
                      >
                        Adopt
                      </Button>
                    )}

                    {currentUser.user_id === currentPet.user_id &&
                    currentPet.status === "fosterd" ? (
                      <Button
                        variant="outline-success"
                        name="available"
                        className="search-btn"
                        onClick={handleClick}
                      >
                        Return Pet
                      </Button>
                    ) : (
                      currentPet.status === "available" && (
                        <Button
                          variant="outline-success"
                          name="fosterd"
                          className="search-btn"
                          onClick={handleClick}
                        >
                          Foster Pet
                        </Button>
                      )
                    )}
                  </ButtonGroup>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
