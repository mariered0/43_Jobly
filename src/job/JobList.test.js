import React from "react";
import { render } from "@testing-library/react";
import JobList from "./JobList";
import JoblyApi from "../api/api";

import UserContext from "../user/UserContext";

const token = JoblyApi.token;

it("renders without crashing", () => {
  render(
        <UserContext.Provider value={{ token }}>
          <JobList />
        </UserContext.Provider>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
        <UserContext.Provider value={{ token }}>
          <JobList />
        </UserContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});