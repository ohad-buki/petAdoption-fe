import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/navbar&footer/Navbar";
import Home from "./components/home/Home";
import UserProfile from "./components/profile/UserProfile";
import Footer from "./components/navbar&footer/Footer";
import SearchPage from "./components/search/SearchPage";
import AppContext from "./context/AppContext";
import "./App.css";
import PetPage from "./components/petPage/PetPage";
import axios from "axios";
import localforage from "localforage";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    try {
      localforage.getItem("token", async (err, value) => {
        if (err) {
          return console.log(err);
        }
        axios.defaults.headers.common["Authorization"] = value;
        const user = await axios.get(`http://localhost:5000/users/logedin`);
        console.log(user);
        if (user.data.email && !currentUser) {
          setCurrentUser(user.data);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, [currentUser]);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}
      >
        <Router>
          <NavbarComp />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              {currentUser ? <UserProfile /> : <Redirect to="/" />}
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/petPage/:id">
              <PetPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
