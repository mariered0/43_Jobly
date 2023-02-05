import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import UserContext from "./user/UserContext";
import JoblyApi from "./api/api";
import Loading from "./common/Loading";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";
import jwt from "jsonwebtoken";

function App() {
  const [token, setToken] = useLocalStorage("token", null);
  const [currentUser, setCurrentUser] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  async function signup(data) {
    try {
      let token = await JoblyApi.signup(data);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error("signup failed", e);
      return { success: false, e };
    }
  }

  async function login(data) {
    try {
      let token = await JoblyApi.login(data);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error("login failed", e);
      return { success: false, e };
    }
  }

  async function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  useEffect(
    function getUserData() {
      async function getCurrentUser() {
        try {
          //decode the token to get username
          const { username } = jwt.decode(token);
          //change token in api
          JoblyApi.token = token;
          const user = await JoblyApi.currentUser(username);
          setCurrentUser(user);
          setDataLoaded(true);
        } catch (e) {
          console.error("getCurrentUser failed", e);
        }
      }
      getCurrentUser();
    },
    [token]
  );
  
  if (!dataLoaded) return <Loading />

  return (
    <div className="App">
      <UserContext.Provider
        value={{ token, currentUser, dataLoaded, setCurrentUser, signup, login, logout }}
      >
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
