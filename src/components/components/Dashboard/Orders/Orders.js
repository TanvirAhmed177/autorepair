import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../../App";
import Navbar from "../../Shared/Navbar/Navbar";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser] = useContext(UserContext);
  console.log(loggedInUser.email);
  useEffect(() => {
    fetch(
      "https://arcane-brook-94372.herokuapp.com/orders?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);
  return (
    <Container fluid className="m-0 p-0">
      <Navbar></Navbar>
      <Container>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Order Status</th>
              </tr>
            </thead>
            {orders.map((order) => (
              <tbody>
                <tr>
                  <td>{order.date}</td>
                  <td>{order.name}</td>
                  <td>{order.price}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </Container>
    </Container>
  );
};

export default Orders;
