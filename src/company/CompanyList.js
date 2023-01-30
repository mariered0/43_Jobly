import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";

const CompanyList = () => {

  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    search();
  }, []);


  async function search(term) {
    if (!term) term = undefined;
    const getData = await JoblyApi.getCompanies(term);
    setCompanies(getData);
  }

  return (
    <div>
      <SearchForm search={search} />

      {companies.length ?(
      companies.map((company) => (
          <CompanyCard
            key={company.handle}
            handle={company.handle}
            name={company.name}
            desc={company.description}
          />
      ))): (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default CompanyList;
