import React from "react";
import "./PetCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PetCard() {
  // { imgURL, dogName, dogBreed, status }
  return (
    <Card
      style={{
        width: "18rem",
        margin: "25px 10px",
        // "background-color": "#F19A3E",
        "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Card.Img
        variant="top"
        src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg"
      />
      <Card.Body>
        {/* <div className="card-body-wrapper"> */}
        <Card.Title>Dog name</Card.Title>
        <Card.Text>short discription</Card.Text>
        <div className="d-flex justify-content-between">
          <div className="pet-status">adopted</div>
          <Button variant="outline-success">See more</Button>
        </div>
        {/* </div> */}
      </Card.Body>
    </Card>
  );
}
