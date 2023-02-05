import React, { useContext, useEffect, useState } from "react";
import userContext from "./UserContext";
import JoblyApi from "../api/api";
import { Form, FormGroup, Label, Input, Card, CardBody, Button, Alert } from "reactstrap";

const Profile = () => {
    const { currentUser, setCurrentUser } = useContext(userContext)
    const [errors, setErrors] = useState(null);
    const [saveSuccess, setSaveSuccess] = useState(false);
    
    const [formData, setFormData] = useState({
      username: currentUser.username,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email
  });
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }
    

    async function handleSubmit (e) {
        
        e.preventDefault();
        const data = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          password: currentUser.password,
          email: formData.email
        }
        try{
          const user = await JoblyApi.updateCurrentUserProf(currentUser.username, data);
          setCurrentUser(user);
          setErrors(null);
          setSaveSuccess(true);
        }catch (err){
          setErrors(errors => [err]);
        }
    }


  return (
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h2 className="mb-3">Profile</h2>
      <Card>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="username" className="mt-3">Username</Label>
              <Input 
                id="username"
                name="username"
                type="text"
                value={formData.username}
                disabled
                color="gray"
                 />
              
              <Label for="firstName" className="mt-3">First name</Label>
              <Input 
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange} />
              
              <Label for="lastName" className="mt-3">Last name</Label>
              <Input 
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange} />
              
              <Label for="email" className="mt-3">Email</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange} />
        
            </FormGroup>
            
            { errors &&
            <Alert color="danger">
              {errors.map((error, idx) => (
                <p key={idx} className="mb-0">{error}</p>
              ))}
            </Alert>
            }

            { saveSuccess &&
            <Alert color="success">
              Updated successfully.</Alert>}

            <Button type="submit" onClick={handleSubmit}>Save</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;