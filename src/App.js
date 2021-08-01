import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/navbar&footer/Navbar";
import Home from "./components/home/Home";
import UserProfile from "./components/profile/UserProfile";
import Footer from "./components/navbar&footer/Footer";
import SearchPage from "./components/search/SearchPage";
import AppContext from "./context/AppContext";
import "./App.css";
import { addData, getData, updateData } from "./mockData";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "Ohad Buckwold",
    age: 26,
    email: "ohadbuki@gmail.com",
    password: "01239",
    profilePic:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0NjQzOTk4OTQ4OTkyMzQy/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals-on-march-11-2017-in-austin-texas-photo-by-matt-winkelmeyer_getty-imagesfor-sxsw-square.jpg",
    description: "i like big butts and i can not lie",
  });

  console.log(getData("users", "AA0"));
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
