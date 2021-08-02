import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Logo from "../shered/Logo";

export default function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="px-2">
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Profile">Profile</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
        </Nav>
      </Container>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
