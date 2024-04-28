import React, { useState } from "react"; // Import React and useState hook from React library
import { Form, Col, Row, Button } from "react-bootstrap"; // Import necessary components from react-bootstrap library
import { useDispatch } from "react-redux"; // Import useDispatch hook from react-redux library
import { filterPizza } from "../actions/pizzaAction"; // Import the filterPizza action from pizzaAction file in actions folder

const Filters = () => { // Functional component named Filters
  const [searchkey, setsearchkey] = useState(""); // State variable searchkey and setter function setsearchkey initialized with useState hook, default value is empty string
  const [category, setcategory] = useState("all"); // State variable category and setter function setcategory initialized with useState hook, default value is "all"
  const dispatch = useDispatch(); // useDispatch hook used to dispatch actions to the Redux store

  return (
    <div className="p-4" style={{ backgroundColor: "#006991", marginTop: "20px" }}> {/* Container div with padding, background color, and top margin */}
      <Form> {/* Form component */}
        <Row> {/* Row component */}
          <Col> {/* Column component */}
            <Form.Control // Form control for input
              value={searchkey} // Value of input field
              onChange={(e) => setsearchkey(e.target.value)} // Function to handle input change and update searchkey state
              placeholder="Search pizza" // Placeholder text for input field
            />
          </Col>
          <Col> {/* Column component */}
            <select // Dropdown select element
              className="form-select" // Bootstrap class for styling
              value={category} // Value of select element
              onChange={(e) => setcategory(e.target.value)} // Function to handle select change and update category state
            >
              <option>All</option> {/* Option for selecting all categories */}
              <option>veg</option> {/* Option for selecting veg category */}
              <option>nonveg</option> {/* Option for selecting nonveg category */}
            </select>
          </Col>
          <Col> {/* Column component */}
            <Button // Button component for search action
              onClick={() => {
                dispatch(filterPizza(searchkey, category)); // Dispatching filterPizza action with searchkey and category parameters
              }}
            >
              Search {/* Button text */}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filters; // Exporting Filters component
