import React from "react";
import SearchForm from "./SearchForm";
import "./search.css";
import Button from "react-bootstrap/Button";

export default function SearchPage() {
  return (
    <div className="d-flex justify-content-center search-page-wrapper">
      <div className="box-wrapper-search d-flex justify-content-center align-items-start">
        <div className="search-form-wrapper ">
          <h1 className="search-form-header">Search for pets</h1>
          <SearchForm />
          <Button variant="outline-success" className="search-btn">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
