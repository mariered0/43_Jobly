import React from "react";

import {Card, CardTitle, CardText} from "reactstrap"

const CompanyCard = () => {

    

    return (
        <div className="container">
            <Card body className="my-2" style={{width: '100%'}}>
                <CardTitle tag="h5">
                    {}
                </CardTitle>
                <CardText>
                    abc
                </CardText>
            </Card>
        </div>
    )
};

export default CompanyCard;