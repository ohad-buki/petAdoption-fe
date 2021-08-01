import React from "react";
import Logo from "../shered/Logo";
import "./header.css";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <h1>Hi Welcome To Adopty</h1>
      <h2>
        Join us in creating a future where <br></br> every pet is safe,
        respected and loved.
      </h2>
      <h4>
        For the past 17 years,<br></br> Adopty has helped in creating true
        social change in pet adoption
      </h4>
    </div>
  );
}
