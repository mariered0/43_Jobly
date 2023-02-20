import React from "react";
import { MemoryRouter } from "react-router";
import { render, fireEvent } from "@testing-library/react";
import SignupForm from "./SignupForm";
import JoblyApi from "../api/api";

import UserContext from "../user/UserContext";

const token = JoblyApi.token;
const signup = jest.fn();

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <UserContext.Provider value={{ token, signup }}>
        <SignupForm />
      </UserContext.Provider>
    </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserContext.Provider value={{ token, signup }}>
        <SignupForm />
      </UserContext.Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("has the login form and accept input", () => {
  const { getByLabelText } = render(
    <MemoryRouter>
      <UserContext.Provider value={{ token, signup }}>
        <SignupForm />
      </UserContext.Provider>
    </MemoryRouter>
  );
  const username = getByLabelText('Username');
  const password = getByLabelText('Password');
  const firstName = getByLabelText('First name');
  fireEvent.change(username, {target: {value: 'abc'}});
  fireEvent.change(password, {target: {value: '123456'}});
  fireEvent.change(firstName, {target: {value: 'marie'}});

  expect(username.value).toBe('abc');
  expect(password.value).toBe('123456');
  expect(firstName.value).toBe('marie');
});