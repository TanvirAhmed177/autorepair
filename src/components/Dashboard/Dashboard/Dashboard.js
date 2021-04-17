import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const containerStyle = {
  border: "1px solid red",
};

const Dashboard = () => {
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
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-10 col-sm-12 col-12 ">
          <h2 className="mt-5 text-dark text-center">
            Ordered Services = <b>{orders.length}</b>
          </h2>

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Service Name</th>
                  <th>Price</th>
                  <th>Payment ID</th>
                </tr>
              </thead>
              {orders.map((order) => (
                <tbody>
                  <tr>
                    <td>{order.date}</td>
                    <td>{order.name}</td>
                    <td>${order.price}</td>
                    <td>{order.paymentId}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
