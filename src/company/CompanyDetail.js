import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import JoblyApi from "../api/api";
import UserContext from "../user/UserContext";
import { useParams } from "react-router-dom";
import JobCard from "../job/JobCard";
import Loading from "../common/Loading";

const CompanyDetail = () => {
  const { token } = useContext(UserContext);
  const { handle } = useParams();
  const [companyDetail, setCompanyDetail] = useState(null);

  useEffect(() => {
    async function getCompanyDetail(handle) {
      const details = await JoblyApi.getCompany(handle);
      setCompanyDetail(details);
    }
    getCompanyDetail(handle);

  }, []);

  if (!companyDetail) return <Loading />;

  if (token) {
    return (
      <div className="container">
        <h4>{companyDetail.name}</h4>
        <p>{companyDetail.description}</p>

        {companyDetail.jobs?.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
          />
        ))}
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default CompanyDetail;
