import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function LoadSpinner() {
  return (
    <Spinner animation="border" role="status" variant="success">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
