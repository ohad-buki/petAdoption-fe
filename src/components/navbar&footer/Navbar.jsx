import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ModalComp from "./ModalLogin";
import Logo from "../shered/Logo";

export default function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg" className="px-2" fixed="top">
      <Navbar.Brand href="#">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Profile">Profile</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <ModalComp />
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar>
  );
}
