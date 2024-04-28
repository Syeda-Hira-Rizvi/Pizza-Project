import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  const cartHeadingStyle = {
    color: "#ffffff",
    backgroundColor: "#006991",
    padding: "10px",
    marginBottom: "20px",
    textAlign: "center",
    borderRadius: "10px"
  };

  const payNowHeadingStyle = {
    color: "#ffffff",
    backgroundColor: "#006991",
    padding: "10px",
    marginBottom: "20px",
    textAlign: "center",
    borderRadius: "10px"
  };

  const cartItemStyle = {
    marginBottom: "20px"
  };

  const cursorPointerStyle = {
    cursor: "pointer"
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1 style={cartHeadingStyle}>My Cart</h1>
          {cartItems.map((item) => (
            <div key={item._id} style={cartItemStyle}>
              <Row className="align-items-center">
                <Col md={4} className="text-center">
                  <img alt={item.name} src={item.image} style={{ width: "80px", height: "80px" }} />
                </Col>
                <Col md={8}>
                  <h5>{item.name} [{item.varient}]</h5>
                  <p className="mb-1">Price: {item.quantity} X {item.prices[0][item.varient]} = {item.price}</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <FaMinusCircle
                        className="text-danger"
                        style={cursorPointerStyle}
                        onClick={() => dispatch(addToCart(item, item.quantity - 1, item.varient))}
                      />
                      <span className="mx-2">{item.quantity}</span>
                      <FaPlusCircle
                        className="text-success"
                        style={cursorPointerStyle}
                        onClick={() => dispatch(addToCart(item, item.quantity + 1, item.varient))}
                      />
                    </div>
                    <FaTrash
                      className="text-danger"
                      style={cursorPointerStyle}
                      onClick={() => dispatch(deleteFromCart(item))}
                    />
                  </div>
                </Col>
              </Row>
              <hr className="my-3" />
            </div>
          ))}
        </Col>
        <Col md={6}>
          <h1 style={payNowHeadingStyle}>Pay Now</h1>
          <div style={{ textAlign: "center" }}>
            <h4>Sub Total</h4>
            <h4>RS: {subTotal} /-</h4>
          </div>
          <div style={{ textAlign: "center" }}>
            <Checkout subTotal={subTotal} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
