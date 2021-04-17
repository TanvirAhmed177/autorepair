import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AddServices from "./components/Dashboard/AddServices/AddServices";
import AddReview from "./components/Orders/AddReview/AddReview";
import Checkout from "./components/CheckOut/CheckOut";
import Orders from "./components/Orders/Orders/Orders";
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";
import NoMatch from "./components/Shared/NoMatch/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import ManageService from "./components/Dashboard/ManageService/ManageService";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/checkout/:name">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route path="/manage">
            <ManageService></ManageService>
          </Route>
          <Route path="/addReviews">
            <AddReview></AddReview>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
