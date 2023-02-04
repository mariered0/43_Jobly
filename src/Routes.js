import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home/Home";
import CompanyList from "./company/CompanyList";
import CompanyDetail from "./company/CompanyDetail"
import JobList from "./job/JobList";
import LoginForm from "./user/LoginForm";
import SignupForm from "./user/SignupForm";
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
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <SignupForm />
      </Route>

      <Route exact path="/profile">
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default Routes;
