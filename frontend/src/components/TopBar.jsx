import React from "react"; // Importing React library

// Importing specific components from react-bootstrap library
import { Navbar, Nav, Container } from "react-bootstrap";

// Importing LinkContainer component from react-router-bootstrap for navigation
import { LinkContainer } from "react-router-bootstrap";

// Importing MdLocalOffer icon from react-icons library
import { MdLocalOffer } from "react-icons/md";

// Functional component named TopBar
const TopBar = () => {
  return (
    <> {/* Fragment shorthand to group multiple children without adding extra nodes to the DOM */}
      {/* Navbar component with dark background, dark variant, and lg (large) expansion */}
      <Navbar bg="dark" variant="dark" expand="lg">
        {/* Container component with fluid (full width) property */}
        <Container fluid>
          {/* Header with light text color */}
          <h6 className="text-light">
            {/* MdLocalOffer icon with warning (yellow) color
            &nbsp creates a space that will not collapse, ensuring that the elements or words remain together without breaking */}
            <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; Free Home
            Delivery on Order Above Rupees 500/- 
          </h6>
          {/* Nav component with ms-auto class for margin-left: auto (to push items to the right) */}
          <Nav className="ms-auto">
            {/* LinkContainer components wrapped around Nav.Link components for navigation */}
            {/* Link to home
             The activeClassName is used to specify the class name that will be applied when the link's destination matches the current URL. */}
            <LinkContainer to="/" activeClassName="">
              {/* Navigation link */}
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {/* Link to About Us */}
            <LinkContainer to="/about" activeClassName="">
              {/* Navigation link */}
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            {/* Link to Contact Us */}
            <LinkContainer to="/contact" activeClassName="">
              {/* Navigation link */}
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            {/* Link to Terms and Conditions */}
            <LinkContainer to="/policy" activeClassName="">
              {/* Navigation link */}
              <Nav.Link>Terms and Conditions</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

// Exporting the TopBar component as the default export
export default TopBar;
