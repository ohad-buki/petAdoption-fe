import React, { useContext } from "react";
import "./PetCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalPetEdit from "./ModalPetEdit";
import AppContext from "../../context/AppContext";

export default function PetCard({ img, name, desc }) {
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
        {currentUser && currentUser.isAdmin && (
          <div className="pet-edit-btn-wrapper">
            <ModalPetEdit />
          </div>
        )}
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <div className="d-flex justify-content-between">
          <div className="pet-status">adopted</div>
          <Button variant="outline-success">See more</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
