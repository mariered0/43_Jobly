import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import JobCard from "./JobCard";
import SearchForm from "../common/SearchForm";
import UserContext from "../user/UserContext";
import Loading from "../common/Loading";
import JoblyApi from "../api/api";

const JobList = () => {
  const { token } = useContext(UserContext);

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    search();
  }, []);

  async function search(term) {
    if (!term) term = undefined;
    const getData = await JoblyApi.getJobs(term);
    console.log('jobs:', getData)
    setJobs(getData);
  }

  if(!jobs) return <Loading />;

  if (token) {
    return (
      <div className="container">
        <h1>JobList</h1>
        <SearchForm search={search} />

        {jobs.length ? (
          jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              salary={job.salary}
              equity={job.equity}
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

export default JobList;
