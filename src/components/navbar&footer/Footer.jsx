import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Logo from "../shered/Logo";
import AppContext from "../../context/AppContext";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const { currentUser } = useContext(AppContext);
  return (
    <Navbar bg="dark" variant="dark" className="px-2">
      <Container>
        <Navbar.Brand to="#home">
          <Logo />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="footerLink">
            Home
          </NavLink>
          {currentUser && (
            <NavLink to="/profile" className="footerLink">
              Profile
            </NavLink>
          )}
          <NavLink to="/search" className="footerLink">
            {currentUser && currentUser.isAdmin ? "Admin/Search" : "Search"}
          </NavLink>
        </Nav>
      </Container>
      <Navbar.Collapse className="justify-content-end">
        {currentUser && (
          <Navbar.Text>
            Signed in as: <Link to="/profile">{currentUser.name}</Link>
          </Navbar.Text>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
