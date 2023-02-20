import React from "react";
import { MemoryRouter } from "react-router";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";
import JoblyApi from "../api/api";

import UserContext from "../user/UserContext";

const token = JoblyApi.token;
const login = jest.fn();

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <UserContext.Provider value={{ token, login }}>
        <LoginForm />
      </UserContext.Provider>
    </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserContext.Provider value={{ token }}>
        <LoginForm />
      </UserContext.Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("has the login form and accept input", () => {
  const { getByLabelText } = render(
    <MemoryRouter>
      <UserContext.Provider value={{ token, login }}>
        <LoginForm />
      </UserContext.Provider>
    </MemoryRouter>
  );
  const username = getByLabelText('Username');
  const password = getByLabelText('Password');
  fireEvent.change(username, {target: {value: 'abc'}});
  fireEvent.change(password, {target: {value: '123456'}});

  expect(username.value).toBe('abc');
  expect(password.value).toBe('123456');
});
