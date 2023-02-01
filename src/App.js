import React, { useState } from "react";
import Routes from "./Routes";
import UserContext from "./user/UserContext";
import JoblyApi from "./api/api";
import "./App.css";

function App() {
  const [token, setToken] = useState();

  async function signup(data) {
    try {
      let token = await JoblyApi.signup(data);
      setToken(token);
      return { success: true };
    } catch (e) {
      //display e message here on screen
      console.error("signUp failed", e);
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
      return { success: false, e}
    }
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ token, signup, login }}>
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
