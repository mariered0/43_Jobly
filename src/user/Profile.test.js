import React from "react";
import { MemoryRouter } from "react-router";
import { render } from "@testing-library/react";
import Profile from "./Profile";
import JoblyApi from "../api/api";

import UserContext from "../user/UserContext";

const token = JoblyApi.token;
const currentUser = jest.fn();

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <UserContext.Provider value={{ token, currentUser }}>
        <Profile />
      </UserContext.Provider>
    </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserContext.Provider value={{ token, currentUser }}>
        <Profile />
      </UserContext.Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("shows profile in the form", () => {
  const { getByLabelText } = render(
    <MemoryRouter>
      <UserContext.Provider value={{ token, currentUser }}>
        <Profile />
      </UserContext.Provider>
    </MemoryRouter>
  );
  const username = getByLabelText("Username");
  const firstName = getByLabelText("First name");

  expect(username.value).toBe("");
  expect(firstName.value).toBe("");
});
