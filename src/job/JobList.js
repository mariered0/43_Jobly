import React from "react";
import JobCard from "./JobCard";


const JobList = ({title, salary, equity}) => {


    return (
        <div className="container">
        <h1>JobList</h1>
        <JobCard 
            title={title}
            salary={salary}
            equity={equity}/>
        </div>
    )
}

export default JobList;