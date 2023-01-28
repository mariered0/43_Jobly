import React from "react";
import CompanyList from "./CompanyList";

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
      {/* <Form /> */}
      <CompanyList />

    </div>
  );
}

export default Company;