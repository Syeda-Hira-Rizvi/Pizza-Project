import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap"; // Importing necessary components from react-bootstrap
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux
import { addToCart } from "../actions/cartAction"; // Importing addToCart action creator

const Pizza = ({ pizza }) => { // Pizza component accepting pizza object as props
  // State variables for managing variant, quantity, and modal visibility
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch(); // useDispatch hook to dispatch actions

  // Function to add pizza to cart
  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient)); // Dispatching addToCart action
  };

  // Function to close the modal
  const handleClose = () => setShow(false);

  // Function to show the modal
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Pizza Card */}
      <Card style={{ width: "18rem", marginTop: "30px" }}>
        {/* Image of the pizza */}
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "250px", cursor: "pointer" }}
          onClick={handleShow} // Clicking on the image opens the modal
        />

        <Card.Body>
          {/* Name of the pizza */}
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          {/* Variant and Quantity selection */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            {/* Variant selection */}
            <div>
              <h6>Variants</h6>
              <select
                value={varient}
                onChange={(e) => setVarient(e.target.value)}
              >
                {pizza.varients.map((varient) => (
                  <option key={varient}>{varient}</option>
                ))}
              </select>
            </div>
            {/* Quantity selection */}
            <div>
              <h6>Quantity</h6>
              <select
                value={quantity} // Sets the selected value of the dropdown to the current quantity state
                onChange={(e) => setQuantity(e.target.value)} // Sets the quantity state to the value selected in the dropdown
              >
             {/* Generates an array of numbers from 0 to 9 and maps over it */}
              {[...Array(10).keys()].map((v, i) => (
              <option key={i + 1} value={i + 1}> {/* Each option represents a quantity value */}
              {i + 1} {/* Display the quantity value */}
               </option>
              ))}
              </select>

            </div>
          </div>
          {/* Price and Add to Cart button */}
          <div className="d-flex justify-content-between align-items-center">
            {/* Price of the pizza */}
            <div>Price : {pizza.prices[0][varient] * quantity} /-RS</div>
            {/* Button to add pizza to cart */}
            <Button
              onClick={addToCartHandler} // Clicking on this button adds pizza to cart
              className="bg-warning text-white"
            >
              Add to cart
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} style={{ marginTop: "50px"  }} >
        <Modal.Header >
          <Modal.Title>{pizza.name}</Modal.Title> 
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-3">
            <img
              src={pizza.image}
              alt={pizza.name}
              style={{ height: "180px" }} // Image of the pizza in modal body 
            />
          </div>
          <div>
            <h5 className="mb-2">Description :</h5> 
            <p>{pizza.description}</p> 
            <div style={{ paddingLeft: "400px"  }} >
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"  onClick={handleClose} >Close</button>
</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
