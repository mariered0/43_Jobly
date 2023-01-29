import React from "react";
import CompanyList from "./CompanyList";
import SearchForm from "../common/SearchForm";

/*
/companies route
- CompanyList - List of all companies
- CompanyCard - Simple info about a company on the list
- CompanyDetail - Detail on a company
*/

function Company() {
  return (
    <div>
      <h1>Company</h1>
      <SearchForm />
      <CompanyList />

    </div>
  );
}

export default Company;