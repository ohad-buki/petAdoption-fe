import React from "react";
import "./body.css";

export default function Body() {
  return (
    <div className="d-flex justify-content-center body-wrapper">
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
  );
}
