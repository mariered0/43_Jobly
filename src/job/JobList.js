import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";


const JobList = () => {

    const [jobs, setJobs] = useState([]);
  useEffect(() => {
    search();
  }, []);


  async function search(term) {
    if (!term) term = undefined;
    const getData = await JoblyApi.getJobs(term);
    setJobs(getData);
  }

    return (
        <div className="container">
        <h1>JobList</h1>
        <SearchForm search={search} />

      {jobs.length ?(
      jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
          />
      ))): (
        <p>No results found.</p>
      )}
        </div>
    )
}

export default JobList;