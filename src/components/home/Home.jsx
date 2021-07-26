import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./home.css";
import Footer from "../navbar&footer/Footer";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <Body />
    </div>
  );
}
