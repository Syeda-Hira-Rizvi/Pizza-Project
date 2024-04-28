import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Login = () => {
  // Selecting state from Redux store
  const loginState = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginState;

  // State variables for login form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Function to handle login
  const loginHandler = () => {
    // Check if any of the fields are empty
    if (!email || !password) {
      alert("Email and password are required");
      return; // Exit early if any field is empty
    }
    
    // Creating user object with login details
    const user = { email, password };
    // Dispatching loginUser action with user object
    dispatch(loginUser(user));
  };

  // JSX to render login form
  return (
    <>
      <Container>
        {/* Displaying loader component while loading */}
        {loading && <Loader />}
        {/* Displaying error message if login fails */}
        {error && <Error error="Invalid email or password" />}
        <Form>
          {/* Email input */}
          <Form.Group style={{marginTop: "20px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {/* Password input */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
    
          {/* Login button */}
          <Button variant="primary" onClick={loginHandler}>
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
