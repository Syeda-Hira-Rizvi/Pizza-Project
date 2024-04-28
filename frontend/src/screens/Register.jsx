import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Error from "../components/Error";

const Register = () => {
  // Selecting state from Redux store
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  // State variables for registration form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Function to handle registration
  const registerHandler = () => {
    // Check if any of the fields are empty
    if (!name || !email || !password || !confirmPassword) {
      alert("All fields are required");
      return; // Exit early if any field is empty
    }
    
    // Checking if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return; // Exit early if passwords do not match
    }
    
    // Creating user object with registration details
    const user = { name, email, password, confirmPassword };
    // Dispatching registerUser action with user object
    dispatch(registerUser(user));
  };

  // JSX to render registration form
  return (
    <>
      <Container>
        {/* Displaying loader component while loading */}
        {loading && <Loader />}
        {/* Displaying success message if registration is successful */}
        {success && <Success success="User Registered Successfully" />}
        {/* Displaying error message if registration fails */}
        {error && <Error error="Something went wrong" />}
        <Form>
          
          {/* Name input */}
          <Form.Group className="mb-3" controlId="formBasicName" style={{marginTop: "20px"}}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          {/* Email input */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          {/* Password input */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label >Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {/* Confirm Password input */}
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
    
          {/* Register button */}
          <Button variant="primary" onClick={registerHandler}>
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
