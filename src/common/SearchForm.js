import React, { useState } from "react";
import { Form, FormGroup, Input, Button, Row, Col } from "reactstrap";

const SearchForm = () => {
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

        
    }


  return (
    <div className="container">
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Input
                bsSize="lg"
                className="mb-3"
                id="search"
                name="search"
                placeholder="Enter search term..."
                type="text"
              />
            </FormGroup>
          </Col>
          <Col>
            <Button size="lg">Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
