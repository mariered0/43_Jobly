import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import { useParams } from "react-router-dom";
import JobCard from "../job/JobCard";

const CompanyDetail = () => {
  const { handle } = useParams();
  const [companyDetail, setCompanyDetail] = useState(null);
  
  useEffect(() => {
    async function getCompanyDetail(handle) {
      const details = await JoblyApi.getCompany(handle);
      setCompanyDetail(details);
      console.log("company details:", details);
    }
    getCompanyDetail(handle);

    console.log('companyDetail:', companyDetail);
  }, []);

  //change this to proper loading display later!
  if (!companyDetail) return <p>Loading...</p>

  return (
   <div className="container">
      <h4>{companyDetail.name}</h4>
      <p>{companyDetail.description}</p>

    {companyDetail.jobs?.map(job => (
        <JobCard
            key={job.id} 
            title={job.title}
            salary={job.salary}
            equity={job.equity}
        />
    ))}
      
        
      
    </div>
  );
};

export default CompanyDetail;
