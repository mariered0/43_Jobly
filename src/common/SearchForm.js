import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "reactstrap";
import CompanyList from "../company/CompanyList"

/** Search form 
 * 
 * Used on Company and Job to allow search for companies and jobs.
*/


const SearchForm = ({ search }) => {
    const INITIAL_STATE = {
        term: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value} = e.target;

        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        search(formData.term);    
    }


  return (
    <div className="container">
      <Form>
        <Row className="row-cols-lg-auto g-3">
          <Col
               md="6" 
               lg="8">
              <Input
                bsSize="lg"
                className="mb-3"
                id="term"
                name="term"
                placeholder="Enter search term..."
                type="text"
                onChange={handleChange}
              />
          </Col>
          <Col>
            <Button size="lg"
                    type="submit"
                    onClick={handleSubmit}>Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
