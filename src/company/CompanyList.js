import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api/api";

const CompanyList = () => {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    async function getCompany() {
      const companies = await JoblyApi.getCompanies();
      setCompanies(companies);
      console.log(companies);
    }
    getCompany();
  }, []);

  return (
    <div>
      {companies?.map((company) => (
        <Link to={`/companies/${company.handle}`} key={company.handle}>
          <CompanyCard
            key={company.handle}
            name={company.name}
            desc={company.description}
          />
        </Link>
      ))}
    </div>
  );
};

export default CompanyList;
