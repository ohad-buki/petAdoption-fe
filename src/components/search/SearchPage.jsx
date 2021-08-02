import React, { useContext, useState } from "react";
import SearchPetsForm from "./SearchPetsForm";
import "./search.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AppContext from "../../context/AppContext";
import SearchUsersForm from "./SearchUsersForm";
import AddPet from "./AddPet";

export default function SearchPage() {
  const { currentUser } = useContext(AppContext);
  const [showSearch, setShowSearch] = useState("searchPets");

  const handleClick = (e) => {
    setShowSearch(e.target.name);
  };
  return (
    <div className="d-flex justify-content-center search-page-wrapper">
      <div className="box-wrapper-search d-flex justify-content-center align-items-start">
        <div className="search-form-wrapper ">
          {currentUser.isAdmin && (
            <ButtonGroup aria-label="Basic example">
              <Button
                variant="outline-success"
                name="searchPets"
                className="search-btn"
                onClick={handleClick}
              >
                Search Pets
              </Button>
              <Button
                variant="outline-success"
                name="searchUsers"
                className="search-btn"
                onClick={handleClick}
              >
                Search Users
              </Button>
              <Button
                variant="outline-success"
                name="addPet"
                className="search-btn"
                onClick={handleClick}
              >
                Add Pet
              </Button>
            </ButtonGroup>
          )}
          {showSearch === "searchPets" && (
            <>
              <h1 className="search-form-header">Search pets</h1>
              <SearchPetsForm />
            </>
          )}
          {showSearch === "searchUsers" && (
            <>
              <h1 className="search-form-header">Search users</h1>
              <SearchUsersForm />
            </>
          )}
          {showSearch === "addPet" && (
            <>
              <h1 className="search-form-header">Add pet</h1>
              <AddPet />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
