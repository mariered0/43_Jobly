import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import CompanyList from "./company/CompanyList";
import CompanyDetail from "./company/CompanyDetail"
import JobList from "./job/JobList";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import NavBar from "./NavBar";

function Routes() {
  return (
    <BrowserRouter>
      <NavBar />

      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path="/profile">
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default Routes;
