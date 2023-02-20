import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

it("renders without crashing", () => {
    render(<SearchForm />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<SearchForm />);
	expect(asFragment()).toMatchSnapshot();
});

it("has a search form", () => {
	const  {getByPlaceholderText} = render(<SearchForm />);
	expect(getByPlaceholderText("Enter search term...")).toBeInTheDocument();
})

//test form accepts input and displays it.
it("accepts entry", () => {
	const mockOnSubmit = jest.fn();
	const  {getByPlaceholderText, getByRole} = render(<SearchForm search={{mockOnSubmit}} />);
	const input = getByPlaceholderText("Enter search term...");
	const btn = getByRole("button");

	fireEvent.change(input, {target: {value: 'anderson'}})
	expect(input.value).toBe('anderson')

	
})