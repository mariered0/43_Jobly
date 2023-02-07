import React from "react";
import { useHistory } from "react-router-dom";

import { Card, CardTitle, CardText } from "reactstrap";

const CompanyCard = ({ name, desc, handle }) => {
    const history = useHistory();

    const handleClick = () => {
        const path = `/companies/${handle}`;
        history.push(path);
    }

  return (
    <div className="container">
      <Card
        body
        className="my-2"
        style={{ width: "100%", cursor: "pointer" }}
        onClick={handleClick}
        >
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{desc}</CardText>
      </Card>
    </div>
  );
};

export default CompanyCard;
