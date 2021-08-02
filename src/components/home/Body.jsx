import React from "react";
import "./body.css";
import PetCard from "../shered/PetCard";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <div className="d-flex justify-content-center body-wrapper flex-column">
      <h1>Pets available for adoption</h1>
      <div className="pets-wrapper d-flex justify-content-center">
        <PetCard
          img="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg"
          name="yosi"
          desc="love food"
        />
        <PetCard
          img="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg"
          name="yosi"
          desc="love food"
        />
        <PetCard
          img="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg"
          name="yosi"
          desc="love food"
        />
        <div className="suggestion d-flex flex-column justify-content-center p-4">
          <Link to="/search">
            <div className="suggestion-all-pets">Search all pets</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
