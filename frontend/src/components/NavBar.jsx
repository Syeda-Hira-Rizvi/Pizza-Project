import React from "react"; // Importing React library
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap"; // Importing specific components from react-bootstrap library
import { useDispatch, useSelector } from "react-redux"; // Importing useDispatch and useSelector hooks from react-redux library
import { LinkContainer } from "react-router-bootstrap"; // Importing LinkContainer component from react-router-bootstrap library
import { logoutUser } from "../actions/userAction"; // Importing logoutUser action from userAction file

const NavBar = () => { // Defining NavBar functional component
  const dispatch = useDispatch(); // Initializing dispatch function using useDispatch hook
  const cartState = useSelector((state) => state.cartReducer); // Getting cart state from Redux store using useSelector hook
  const userState = useSelector((state) => state.loginUserReducer); // Getting user state from Redux store using useSelector hook
  const { currentUser } = userState; // Extracting currentUser from userState

  // Rendering NavBar component
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
        <Container>
          {/*Navbar.Brand represents the brand or logo in a Navbar component */}
          <Navbar.Brand> 
            <Image 
              src="images/logof.png"
              alt="logo1"
              style={{ 
            height: "70px" ,width: "200px"}}
            />
          </Navbar.Brand>
          {/* <Navbar.Toggle> is like the button you tap on a phone to open a menu*/}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           {/* <Navbar.Collapse> is like the menu that appears when you tap that button. It contains all the menu items.*/}
          <Navbar.Collapse id="responsive-navbar-nav"> 
          
            <Nav className="ms-auto">
              {currentUser ? ( // If there is a logged-in user
    // Show a dropdown menu with the user's name
                <LinkContainer to="/">
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (  // If there is no logged-in user
                <>
                  {" "}
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>{" "}
                </>
              )}

              <LinkContainer to="/cart">
                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
