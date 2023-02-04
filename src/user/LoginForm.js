import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import userContext from "./UserContext";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Button,
  Alert
} from "reactstrap";

const LoginForm = () => {
  const { token, login } = useContext(userContext);
  const [errors, setErrors] = useState(null);
  const history = useHistory();

  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const msg = await login(formData);
    if (msg.success) {
      history.push("/");
    } else {
      console.log("msg.e:", msg.e);
      setErrors((errors) => [msg.e]);
    }
    setFormData(INITIAL_STATE);
  }

  return (
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h2 className="mb-3">Login</h2>
      <Card>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="username" className="mt-3">
                Username
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
              />

              <Label for="password" className="mt-3">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="on"
                onChange={handleChange}
              />
            </FormGroup>

            { errors &&
            <Alert color="danger">
              {errors.map((error, idx) => (
                <p key={idx} className="mb-0">{error}</p>
              ))}
            </Alert>
            }


            <Button type="submit" onClick={handleSubmit}>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginForm;
