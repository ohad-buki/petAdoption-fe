import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./home.css";
import Footer from "../navbar&footer/Footer";

export default function Home() {
  try {
    return (
      <div className="home-wrapper">
        <Header />
        <Body />
      </div>
    );
  } catch (error) {
    return <h1>Something went worng</h1>;
  }
}
