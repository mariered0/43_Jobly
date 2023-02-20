import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

// //importing the provider here for react context.
import UserContext from "../user/UserContext";

const currentUser = jest.fn();

it("renders without crashing", () => {
  render(
    <UserContext.Provider value={{ currentUser }}>
      <Home />
    </UserContext.Provider>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <UserContext.Provider value={{ currentUser }}>
      <Home />
    </UserContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("has the message", () => {
  const msg = "All the jobs in one, convenient place.";
  const { getByText } = render(
  <UserContext.Provider value={{ currentUser }}>
    <Home />
  </UserContext.Provider>
  );
  expect(getByText(msg)).toBeInTheDocument();
});
