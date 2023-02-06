import React from "react";
import { Card, CardTitle, List, Button } from "reactstrap";

const JobCard = ({ title, salary, equity }) => {

  


  return (
    <Card body className="my-2 position-relative" style={{ width: "100%" }}>
      <CardTitle tag="h5">{title}</CardTitle>
      <List type="unstyled">
        <li>salary: {salary}</li>
        <li>equity: {equity}</li>
      </List>

      <Button className="position-absolute bottom-0 end-0 m-3" color="danger" style={{ width: "60pt"}}>Apply</Button>
    </Card>
  );
};

export default JobCard;
