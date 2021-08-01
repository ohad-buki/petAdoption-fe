import React from "react";

export default function ProfilePic(props) {
  console.log(props.url);
  return <img src={props.url} />;
}
