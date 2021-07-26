import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/navbar&footer/Navbar";
import Home from "./components/home/Home";
import UserProfile from "./components/users/UserProfile";
import Footer from "./components/navbar&footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Profile">
            <UserProfile />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
