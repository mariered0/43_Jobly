import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import userContext from "../user/UserContext";
import "./Home.css";

function Home() {
  const { currentUser } = useContext(userContext);

  return (
    <div className="container">
      <div className="Home-content">
        <h1 className="Home-title">Jobly</h1>
        <p className="Home-text">All the jobs in one, convenient place.</p>
        {currentUser ? (
          <h1 className="Home-title">Welcome Back, {currentUser.firstName}!</h1>
        ) : (
          <>
            <Link to="/signup">
              <Button className="Home-btn" color="primary">
                Sign Up
              </Button>
            </Link>

            <Link to="/login">
              <Button className="Home-btn" color="primary">
                Log In
              </Button>
            </Link>
          </>
        )}

        <div className="Home-attribute">
          Photo by{" "}
          <a href="https://unsplash.com/@pramodtiwari?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Pramod Tiwari
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
