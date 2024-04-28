import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction"; // Importing the action creator for fetching pizzas
import Pizza from "../components/Pizza"; // Importing the Pizza component
import Loader from "../components/Loader"; // Importing the Loader component
import Error from "../components/Error"; // Importing the Error component
import Filters from "../components/Filters"; // Importing the Filters component

const HomeScreen = () => {
  const dispatch = useDispatch(); // Getting the dispatch function from Redux
  const pizzastate = useSelector((state) => state.getAllPizzaReducer); // Selecting pizza state from Redux store

  //We're using object destructuring to extract three properties (loading, pizzas, and error) from the pizzastate object
  //It's like picking specific things out of a larger collection. Here, we're picking out specific pieces of data from the pizzastate object.
  const { loading, pizzas, error } = pizzastate; // Destructuring pizza state
  
  // useEffect hook to fetch pizzas when component mounts
  //this piece of code ensures that when the component is shown on the screen for the first time, it sends a message to Redux to fetch all the pizzas from the server. 
{/*  useEffect is a React Hook. It's a special function provided by React that allows you to perform side effects in function components.
These are actions that happen outside of the main flow of your component, like fetching data from an API, subscribing to events, or updating the document title.*/} 
  useEffect(() => {
    dispatch(getAllPizzas()); // Dispatching action to fetch pizzas
  }, [dispatch]); // Dependency array to ensure useEffect runs only once

  return (
    <>
      <Container>
        
        {/* Conditional rendering based on loading and error states 
        If loading is true, it renders the <Loader /> component, indicating that data is still being loaded.
        If there's an error, it renders an <Error /> component with an error message.
        If neither loading nor error is true (indicating that data has been successfully loaded), it renders the pizza items.*/}

        {loading ? ( // Display loader if data is loading
          <Loader />
        ) : error ? ( // Display error message if there's an error
          <Error>Error while fetching pizzas {error}</Error>
        ) : ( // Render pizzas if data is fetched successfully
          <Row style={{ marginBottom: "40px" }}>
            <Filters /> {/* Render Filters component for filtering pizzas */}
            {pizzas.map((pizza) => ( // Map through pizzas array to render each pizza
              <Col md={4} key={pizza.name}> {/* Render each pizza in a column */}
                <Pizza pizza={pizza} /> {/* Pass pizza data as prop to Pizza component */}
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
