import React from "react";
import { Card, CardTitle, List } from "reactstrap";

const JobCard = ({ title, salary, equity }) => {
  return (
    <Card body className="my-2" style={{ width: "100%" }}>
      <CardTitle tag="h5">{title}</CardTitle>
      <List type="unstyled">
        <li>salary: {salary}</li>
        <li>equity: {equity}</li>
      </List>
    </Card>
  );
};

export default JobCard;
