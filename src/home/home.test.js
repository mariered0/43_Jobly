import React, { useContext } from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

//importing the provider here for react context.
import {UserContext} from "../user/UserContext";

const renderComponent = ( {currentUser} ) => {
    return render(
        <UserContext.Provider value={currentUser}>
            <Home currentUser={currentUser} />
        </UserContext.Provider>
    )
}


it("renders without crashing", () => {
    renderComponent('');
    render(<Home />);
});

// it("matches snapshot", () => {
// 	const { asFragment } = render(<Home />);
// 	expect(asFragment()).toMatchSnapshot();
// });