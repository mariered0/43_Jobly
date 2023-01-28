import React from "react";
import CompanyCard from "./CompanyCard"
import JoblyApi from "./api";



const CompanyList = () => {
    const companies = JoblyApi.getAllCompanies();
    console.log(companies);

    return (
        <div>
            <CompanyCard />
        </div>
    )
}

export default CompanyList;