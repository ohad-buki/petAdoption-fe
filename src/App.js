import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/navbar&footer/Navbar";
import Home from "./components/home/Home";
import UserProfile from "./components/profile/UserProfile";
import Footer from "./components/navbar&footer/Footer";
import SearchPage from "./components/search/SearchPage";
import AppContext from "./context/AppContext";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({ isAdmin: true });

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
            <Route exact path="/Profile">
              <UserProfile />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
