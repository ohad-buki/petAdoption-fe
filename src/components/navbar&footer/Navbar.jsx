import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ModalComp from "./ModalLogin";
import Logo from "../shered/Logo";
import AppContext from "../../context/AppContext";
import { Link, NavLink } from "react-router-dom";

export default function NavbarComp() {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const logout = () => {
    setCurrentUser();
  };
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
          <NavLink to="/" className="navLink">
            Home
          </NavLink>
          {currentUser && (
            <NavLink to="/profile" className="navLink">
              Profile
            </NavLink>
          )}
          <NavLink to="/search" className="navLink">
            {currentUser && currentUser.isAdmin ? "Admin/Search" : "Search"}
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      {!currentUser && <ModalComp />}
      {currentUser && (
        <>
          <Navbar.Text>
            Signed in as: <Link to="/profile">{currentUser.name}</Link>
          </Navbar.Text>
          <div
            style={{
              color: "rgb(245, 96, 96)",
              cursor: "pointer",
              margin: "0 10px",
            }}
            onClick={logout}
          >
            Logout
          </div>
        </>
      )}
    </Navbar>
  );
}
