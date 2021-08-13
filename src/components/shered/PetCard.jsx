import React, { useContext } from "react";
import "./PetCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalPetEdit from "../petPage/ModalPetEdit";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

export default function PetCard({ img, name, type, status, pet_id }) {
  const { currentUser } = useContext(AppContext);
  return (
    <Card
      style={{
        width: "18rem",
        margin: "25px 10px",
        "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        position: "relative",
      }}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        {currentUser && (
          <div className="pet-edit-btn-wrapper">
            <Button>Like</Button>
          </div>
        )}
        <Card.Title>{name}</Card.Title>
        <Card.Text>{type}</Card.Text>
        <div className="d-flex justify-content-between">
          <div className="pet-status">{status}</div>
          <Link to={`/petPage/${pet_id}`}>See more</Link>
        </div>
      </Card.Body>
    </Card>
  );
}
