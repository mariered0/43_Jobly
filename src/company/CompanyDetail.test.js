import React from "react";
import { MemoryRouter } from "react-router";
import { Route } from "react-router-dom";
import { render } from "@testing-library/react";
import CompanyDetail from "./CompanyDetail";
import JoblyApi from "../api/api";

import UserContext from "../user/UserContext";

const token = JoblyApi.token;

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <Route path="/companies/anderson-arias-morrow">
        <UserContext.Provider value={{ token }}>
          <CompanyDetail />
        </UserContext.Provider>
      </Route>
    </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Route path="/companies/anderson-uarias-morrow">
        <UserContext.Provider value={{ token }}>
          <CompanyDetail />
        </UserContext.Provider>
      </Route>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
