import React, { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";
import Pizzaslist from "../components/Admin/Pizzaslist";
import Userlist from "../components/Admin/Userlist";
import EditPizza from "./../components/Admin/EditPizza";

const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  
  const buttonStyle = {
    color: "white",
    backgroundColor: "#006991",
    paddingLeft: "0", // Added padding-left: 0
    borderRadius: "10px", // Added border radius
  };

  return (
    <>
      <Container>
        <Row>
          <h1 style={{color: "white" , backgroundColor: "#006991", textAlign: "center", fontWeight: "bold", padding: "20px 0" ,   borderRadius: "10px" , marginLeft: "30px" , marginTop: "10px" }}>Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "600px" ,marginTop: "20px" , height: "100%" , paddingLeft: "0" ,  borderRadius: "10px"  }}>
              <Button 
                onClick={() => history.push("/admin/userlist")}
                variant="dark"
                className="w-100 mb-2"
                style={buttonStyle }
              >
                All Users
              </Button>
              <Button
                onClick={() => history.push("/admin/pizzalist")}
                variant="dark"
                className="w-400 mb-2 "
                style={buttonStyle}
              >
                All Pizzas
              </Button>
              <Button
                onClick={() => history.push("/admin/addnewpizza")}
                variant="dark"
                className="w-100 mb-2"
                style={buttonStyle}
              >
                Add New Pizza
              </Button>
              <Button
                onClick={() => history.push("/admin/orderlist")}
                variant="dark"
                className="w-100 mb-2"
                style={buttonStyle}
              >
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Routes style = {{paddingLeft: "0px"}}>
              <Route path="/admin" component={Userlist} exact />
              <Route path="/admin/userlist" component={Userlist} exact />
              <Route
                path="/admin/editpizza/:pizzaId"
                component={EditPizza}
                exact
              />
              <Route path="/admin/pizzalist" component={Pizzaslist} exact />
              <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
