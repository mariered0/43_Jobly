import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../user/UserContext";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import "./NavBar.css";

function NavBar() {
  const { currentUser, logout } = useContext(UserContext);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">Jobly</NavbarBrand>
        <Nav className="ms-auto " navbar>
          {currentUser ? (
            <>
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
                <Link to="/" onClick={logout}>
                  Log out {currentUser ? currentUser.username : ""}
                </Link>
              </NavItem>
            </>
          ) : (
            <>
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
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
