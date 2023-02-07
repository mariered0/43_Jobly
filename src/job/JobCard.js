import React, { useContext, useState, useEffect } from "react";
import JoblyApi from "../api/api";
import UserContext from "../user/UserContext";
import { Card, CardTitle, List, Button } from "reactstrap";

const JobCard = ({ title, salary, equity, jobId }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    if (!currentUser) return;
    const hasApplied = currentUser.applications.includes(jobId);
    setIsApplied(hasApplied);
  }, [currentUser]);

  async function handleClick(e) {
    try{
      await JoblyApi.apply(currentUser.username, e.target.id);
      setCurrentUser(currentUser);
      setIsApplied(true);
    } catch (err) {
      console.error("apply failed", err);
    } 
  }

  return (
    <Card body className="my-3 position-relative" style={{ width: "100%" }}>
      <CardTitle tag="h5">{title}</CardTitle>
      <List type="unstyled">
        <li>salary: {salary}</li>
        <li>equity: {equity}</li>
      </List>

      {currentUser && (
        
      <Button
        className="position-absolute bottom-0 end-0 m-3"
        color="danger"
        style={{ width: "70pt" }}
        onClick={handleClick}
        id={jobId}
        disabled={isApplied }
      >
        {isApplied ? 'Applied' : 'Apply'}
      </Button>
      )}
    </Card>
  );
};

export default JobCard;
