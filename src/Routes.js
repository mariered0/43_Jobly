import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./home/Home";
import CompanyList from "./company/CompanyList";
import CompanyDetail from "./company/CompanyDetail"
import JobList from "./job/JobList";
import LoginForm from "./user/LoginForm";
import SignupForm from "./user/SignupForm";
import Profile from "./user/Profile";
import NavBar from "./nav/NavBar";

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


      {/* <Redirect to="/" /> */}

    </BrowserRouter>
  );
}

export default Routes;
