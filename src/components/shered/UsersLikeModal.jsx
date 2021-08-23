import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function UsersLikeModal({ usersLike }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   useEffect(() => {}, []);
  return (
    <>
      <Button
        variant="outline-success"
        className="edit-profile-btn"
        onClick={handleShow}
      >
        {usersLike.length}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Users who liked this</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {usersLike.map((user) => {
            return (
              <div className="users-like-list">
                <img className="profile-pic-small" src={user.photo_url}></img>
                {user.name}
              </div>
            );
          })}
        </Modal.Body>
      </Modal>
    </>
  );
}
