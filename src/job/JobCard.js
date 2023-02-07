import React, { useContext, useState, useEffect } from "react";
import JoblyApi from "../api/api";
import UserContext from "../user/UserContext";
import { Card, CardTitle, List, Button } from "reactstrap";

const JobCard = ({ title, salary, equity, jobId }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [jobApplied, setjobApplied] = useState(currentUser.applications);
  console.log("currentUser:", currentUser);

  useEffect(() => {
    if (!currentUser) return;
    console.log('INSIDE USEEFFECT')
    setCurrentUser(currentUser);
    async function handleClick(e) {
      console.log("e.target", e.target.dataset.jobid);
      const apply = await JoblyApi.apply(
        currentUser.username,
        e.target.dataset.jobid
      );
      setjobApplied((jobApplied) => ([...jobApplied, e.target.dataset.jobid]));
      setCurrentUser(currentUser);
      console.log(apply);
    }
  }, [jobApplied]);

  async function handleClick(e) {
    console.log("e.target", e.target.dataset.jobid);
    const apply = await JoblyApi.apply(
      currentUser.username,
      e.target.dataset.jobid
    );
    setjobApplied((jobApplied) => ([...jobApplied, e.target.dataset.jobid]));
    setCurrentUser(currentUser);
    console.log(apply);
  }

  return (
    <Card body className="my-3 position-relative" style={{ width: "100%" }}>
      <CardTitle tag="h5">{title}</CardTitle>
      <List type="unstyled">
        <li>salary: {salary}</li>
        <li>equity: {equity}</li>
        <li>JobId: {jobId}</li>
      </List>

      {console.log('JOB APPLIED', jobApplied.includes(jobId))}
      {currentUser && (
        
      <Button
        className="position-absolute bottom-0 end-0 m-3"
        color="danger"
        style={{ width: "70pt" }}
        onClick={handleClick}
        data-jobId={jobId}
        disabled={jobApplied.includes(jobId) ? true: false}
      >
        {jobApplied.includes(jobId) ? 'Applied' : 'Apply'}
      </Button>
      )}
    </Card>
  );
};

export default JobCard;
