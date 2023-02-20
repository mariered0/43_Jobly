import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import JoblyApi from "../api/api";

import UserContext from "../user/UserContext";

const token = JoblyApi.token;

it("renders without crashing", () => {
  render(
        <UserContext.Provider value={{ token }}>
          <JobCard />
        </UserContext.Provider>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
        <UserContext.Provider value={{ token }}>
          <JobCard />
        </UserContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
