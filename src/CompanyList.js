import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard"
import JoblyApi from "./api/api";



const CompanyList = () => {

    // const [loading, setLoading] = useState(false);
    // const [display, setDisplay] = useState([]);
    
    // useEffect(() => {
    //     const loadData = async () => {
    //         setLoading(true);

    //         const company = await JoblyApi.getCompany('bauer-gallagher');
    //         console.log(company);
    //         setDisplay(company);

    //         setLoading(false);
    //     }
    //     loadData();
    //     console.log('display:', display);
    // });

    const companies = JoblyApi.getAllCompanies();
    console.log(companies);

    const company = JoblyApi.getCompany('bauer-gallagher');
    console.log(company);

    return (
        <div>
            <CompanyCard />
        </div>
    )
}

export default CompanyList;