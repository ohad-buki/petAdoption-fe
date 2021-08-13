import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AppContext from "../../context/AppContext";
import axios from "axios";
import ModalPetEdit from "./ModalPetEdit";

export default function PetPage() {
  const { currentUser } = useContext(AppContext);
  const [currentPet, setCurrentPet] = useState();

  useEffect(async () => {
    const { petId } = useParams();
    try {
      const pet = await axios.get(
        `http://localhost:5000/pets/?pet_id=${petId}`
      );
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
          user_id: e.target.name === "avilible" ? 0 : currentUser.user_id,
        }
      );
      setCurrentPet(pet);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {currentPet && (
        <div className="profile-wrapper d-flex justify-content-center">
          <div className="box-wrapper pet-profile">
            <div className="petImage">
              <img src={currentPet.photo_url} />
            </div>
            <div className="pet-info">
              <div className="info-line pet-name">
                <h4>Name</h4>
                <h4>{currentPet.photo_url}</h4>
              </div>
              <div className="info-line">
                <h4>Type</h4>
                <h4>{currentPet.type}</h4>
              </div>
              <div className="info-line">
                <h4>Age</h4>
                <h4>{currentPet.age}</h4>
              </div>
              <div className="info-line">
                <h4>Height</h4>
                <h4>{currentPet.height}</h4>
              </div>
              <div className="info-line">
                <h4>Weight</h4>
                <h4>{currentPet.weight}</h4>
              </div>
              <div className="info-line">
                <h4>Color</h4>
                <h4>{currentPet.color}</h4>
              </div>
              <div className="info-line">
                <h4>Dietary restrictions</h4>
                <h4>{currentPet.dietary_restrictions}</h4>
              </div>
              <div className="info-line">
                <h4>Hypoallergenic</h4>
                <h4>{currentPet.hypoallergenic}</h4>
              </div>
              <div className="info-line">
                <h4>Status</h4>
                <h4>{currentPet.status}</h4>
              </div>
              <div className="btn-group-wrapper"></div>
              <ButtonGroup aria-label="Basic example">
                {currentUser.is_admin && <ModalPetEdit pet={currentPet} />}
                {currentPet.status === "avilible" && (
                  <>
                    <Button
                      variant="outline-success"
                      name="adopted"
                      className="search-btn"
                      onClick={handleClick}
                    >
                      Adopt
                    </Button>
                    {currentUser.user_id === currentPet.user_id &&
                    currentPet.status === "fosterd" ? (
                      <Button
                        variant="outline-success"
                        name="avilible"
                        className="search-btn"
                        onClick={handleClick}
                      >
                        Return Pet
                      </Button>
                    ) : (
                      <Button
                        variant="outline-success"
                        name="fosterd"
                        className="search-btn"
                        onClick={handleClick}
                      >
                        Foster Pet
                      </Button>
                    )}
                  </>
                )}
              </ButtonGroup>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
