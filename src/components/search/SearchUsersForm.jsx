import React, { useState, useContext, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AppContext from "../../context/AppContext";

export default function SearchUsersForm() {
  const [searchForm, setSearchForm] = useState({});
  const [userList, setUserList] = useState();
  const { currentUser } = useContext(AppContext);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    let query = "/?";
    const formArr = Object.entries(searchForm);
    if (formArr.length) {
      formArr.forEach(([key, value], i) => {
        if (value) {
          if (i === 0) {
            query += `${key}=${value}`;
          } else {
            query += `&${key}=${value}`;
          }
        }
      });
    }
    try {
      const users = await axios.get(
        `${process.env.REACT_APP_HOST}/users${query}`
      );
      console.log(users);
      setUserList(users.data);
      formRef.current.reset();
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  };

  const makeAdmin = async (e, isAdmin) => {
    try {
      const user = await axios.put(
        `${process.env.REACT_APP_HOST}/users/edit/${e.target.name}`,
        { is_admin: !isAdmin }
      );
      handleSubmit();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Form className="px-2" onSubmit={handleSubmit} ref={formRef}>
        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
        {/* <Button variant="primary" onClick={getAllUsers}>
        All Users
      </Button> */}
      </Form>
      {userList && (
        <ul className="users-list">
          {userList.map((user) => {
            return (
              <li key={user.user_id} className="user-row">
                <div>{user.name}</div>
                <div>{user.email}</div>
                {currentUser.user_id !== user.user_id && (
                  <Button
                    onClick={(e) => {
                      makeAdmin(e, user.is_admin);
                    }}
                    name={user.user_id}
                  >
                    {user.is_admin ? "unAdmin" : "Make Admin"}
                  </Button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
