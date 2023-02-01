import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import "./NavBar.css"

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">Jobly</NavbarBrand>


          <Nav className="ms-auto " navbar>
            <NavItem className="px-2">
              <NavLink exact to="/companies">
                Company
              </NavLink>
            </NavItem>

            <NavItem className="px-2">
              <NavLink exact to="/jobs">
                Job
              </NavLink>
            </NavItem>

            <NavItem className="px-2">
              <NavLink exact to="/profile">
                Profile
              </NavLink>
            </NavItem>

            <NavItem className="px-2">
              <NavLink exact to="/login">
                Login
              </NavLink>
            </NavItem>

            <NavItem className="px-2">
              <NavLink exact to="/signup">
                Sign up
              </NavLink>
            </NavItem>

            <NavItem className="px-2">
              <NavLink exact to="/:username">
                Username
              </NavLink>
            </NavItem>
          </Nav>

      </Navbar>
    </div>
  );
}

export default NavBar;
