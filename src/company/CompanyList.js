import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";
import UserContext from "../user/UserContext";
import JoblyApi from "../api/api";

const CompanyList = () => {
  const { token } = useContext(UserContext);
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    search();
  }, []);

  async function search(term) {
    if (!term) term = undefined;
    const getData = await JoblyApi.getCompanies(term);
    setCompanies(getData);
  }

  if (token) {
    return (
      <div>
        <SearchForm search={search} />

        {companies.length ? (
          companies.map((company) => (
            <CompanyCard
              key={company.handle}
              handle={company.handle}
              name={company.name}
              desc={company.description}
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default CompanyList;
