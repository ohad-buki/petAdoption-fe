import React from "react";
import "./UserProfile.css";

export default function UserProfile() {
  return (
    <div className="profile-wrapper d-flex justify-content-center">
      <div className="box-wrapper">
        <div className="img-wrapper">
          <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0NjQzOTk4OTQ4OTkyMzQy/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals-on-march-11-2017-in-austin-texas-photo-by-matt-winkelmeyer_getty-imagesfor-sxsw-square.jpg" />
        </div>
        <div className="profile-name">LALA</div>
        <div className="about-me">i like big butts and i can not lie</div>
        <div className="pets-i-like d-flex justify-content-center">
          <div className="i-like-header"></div>
          <div className="suggestion d-flex flex-column justify-content-center p-4">
            <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg"></img>
            <div className="suggestion-dog-name">
              Dog Name <br></br>
              <div className="is-looking">is looking for a home :))</div>
            </div>
          </div>
          <div className="suggestion d-flex flex-column justify-content-center p-4">
            <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg"></img>
            <div className="suggestion-dog-name">
              Dog Name <br></br>
              <div className="is-looking">is looking for a home :))</div>
            </div>
          </div>
          <div className="suggestion d-flex flex-column justify-content-center p-4">
            <div className="suggestion-all-pets">
              Link To All<br></br> Pets Page
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
