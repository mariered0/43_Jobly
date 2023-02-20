import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import UserContext from "../user/UserContext";

const currentUser = jest.fn();
const logout = jest.fn();

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <UserContext.Provider value={{ currentUser, logout }}>
        <NavBar />
      </UserContext.Provider>
    </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserContext.Provider value={{ currentUser, logout }}>
        <NavBar />
      </UserContext.Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("shows links", () => {
  const { getByText } = render(
    <MemoryRouter>
      <UserContext.Provider value={{ currentUser, logout }}>
        <NavBar />
      </UserContext.Provider>
    </MemoryRouter>
  );

  const logOut = getByText('Log out');
  fireEvent.click(logOut);
  expect(getByText('Jobly')).toBeInTheDocument();

});
