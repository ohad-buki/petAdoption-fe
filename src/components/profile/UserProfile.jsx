import React, { useContext } from "react";
import "./UserProfile.css";
import ProfilePic from "../shered/ProfilePic";
import PetCard from "../shered/PetCard";
import ModalEditProfile from "../shered/ModalEditProfile";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AppContext from "../../context/AppContext";

export default function UserProfile() {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  return (
    <div className="profile-wrapper d-flex justify-content-center">
      <div className="box-wrapper">
        <div className="img-wrapper">
          <ProfilePic url={currentUser.profilePic} />
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
                <Button variant="outline-success" className="search-btn">
                  Adopted
                </Button>
                <Button variant="outline-success" className="search-btn">
                  Fosterd
                </Button>
                <Button variant="outline-success" className="search-btn">
                  Liked
                </Button>
              </ButtonGroup>
            </div>
            <div className="pets-wrapper d-flex">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
