import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Company from "./Company";
import Job from "./Job";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";


function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/companies" element={ <Company />} />
            <Route exact path="/companies/:company" element={ <Job /> } />
            <Route exact path="/jobs" element={ <Job />} />
            <Route exact path="/login" element={ <Login />} />
            <Route exact path="/signup" element={ <Signup />} />
            <Route exact path="/profile" element={ <Profile />} />

        </BrowserRouter>
    )
};

export default Routes;