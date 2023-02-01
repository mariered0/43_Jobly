import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import userContext from "./UserContext";
import { Form, FormGroup, Label, Input, Card, CardBody, Button, Alert, List} from "reactstrap";

const SignupForm = () => {
    const { token, signup } = useContext(userContext)
    const [errors, setErrors] = useState(null);
    const history = useHistory();

    const INITIAL_STATE = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }
    
    async function handleSubmit (e) {
        e.preventDefault();
        const msg = await signup(formData);
        if (msg.success) {
          history.push('/');
        } else{
          setErrors(errors => [msg.e]);
        }
        setFormData(INITIAL_STATE);
    }

  return (
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h2 className="mb-3">Sign up</h2>
      <Card>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="username" className="mt-3">Username</Label>
              <Input 
                id="username"
                name="username"
                type="text"
                
                onChange={handleChange} />
              
              <Label for="password" className="mt-3">Password</Label>
              <Input 
                id="password"
                name="password"
                type="password"
                autoComplete="on"
                onChange={handleChange} />
              
              <Label for="firstName" className="mt-3">First name</Label>
              <Input 
                id="firstName"
                name="firstName"
                type="text"
                onChange={handleChange} />
              
              <Label for="lastName" className="mt-3">Last name</Label>
              <Input 
                id="lastName"
                name="lastName"
                type="text"
                onChange={handleChange} />
              
              <Label for="email" className="mt-3">Email</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                onChange={handleChange} />
        
            </FormGroup>
            
            { errors &&
            <Alert color="danger">
              {errors.map((error, idx) => (
                <p key={idx}>{error}</p>
              ))}
            </Alert>
            }

            <Button onClick={handleSubmit}>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignupForm;
