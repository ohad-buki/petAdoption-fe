import React, { useContext, useEffect, useState } from "react";
import "./PetCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import UsersLikeModal from "./UsersLikeModal";

export default function PetCard({ img, name, type, status, pet_id }) {
  const { currentUser } = useContext(AppContext);
  const [isLiked, setIsLiked] = useState(false);
  const [usersLike, setUsersLike] = useState();

  useEffect(async () => {
    try {
      if (currentUser) {
        const users = await axios.get(
          `${process.env.REACT_APP_HOST}/likes/getUsersByPet/${pet_id}`
        );
        const likeStatus = await axios.get(
          `${process.env.REACT_APP_HOST}/likes/specific/${currentUser.user_id}/${pet_id}`
        );
        if (likeStatus.data.length > 0) {
          setIsLiked(true);
        }
        setUsersLike(users.data);
      }
    } catch (e) {
      console.log(e);
    }
  }, [isLiked, currentUser]);

  const handleLike = async () => {
    try {
      let res;
      console.log(isLiked);
      if (isLiked === true) {
        res = await axios.put(`${process.env.REACT_APP_HOST}/likes`, {
          user_id: currentUser.user_id,
          pet_id: pet_id,
        });
        setIsLiked(false);
      } else {
        res = await axios.post(`${process.env.REACT_APP_HOST}/likes`, {
          user_id: currentUser.user_id,
          pet_id: pet_id,
        });
        setIsLiked(true);
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Card
      style={{
        width: "18rem",
        margin: "25px 10px",
        "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        position: "relative",
      }}
    >
      <Card.Img
        variant="top"
        src={img}
        style={{
          height: "230px",
        }}
      />
      <Card.Body>
        {currentUser && (
          <div className="pet-edit-btn-wrapper">
            <Button onClick={handleLike}>{isLiked ? "unlike" : "Like"}</Button>
            {usersLike && usersLike.length > 0 && (
              <UsersLikeModal usersLike={usersLike} />
            )}
          </div>
        )}
        <Card.Title>{name}</Card.Title>
        <Card.Text>{type}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div className="pet-status">{status}</div>
          <Link to={`/petPage/${pet_id}`}>
            {" "}
            <Button variant="success">See more</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}
