import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import UserContext from "./user/UserContext";
import JoblyApi from "./api/api";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";
import jwt from "jsonwebtoken";

function App() {
  const [token, setToken] = useLocalStorage('token', null);
  const [currentUser, setCurrentUser] = useState(null);
  

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

  useEffect (function getUserData() {
    async function getCurrentUser() {
      if (token) {
        try {
          //decode the token to get username
          const { username } = jwt.decode(token);
          //change token in api
          JoblyApi.token = token;
          const user = await JoblyApi.currentUser(username);
          setCurrentUser(user);
          localStorage.setItem('token', JSON.stringify(token));
        } catch (e) {
          console.error("getCurrentUser failed", e);
        }
        setToken(JSON.parse(localStorage.getItem('token')));
      }
      
    }
    getCurrentUser();
  }, [token]);
    

  return (
    <div className="App">
      <UserContext.Provider value={{ token, currentUser, signup, login, logout }}>
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
