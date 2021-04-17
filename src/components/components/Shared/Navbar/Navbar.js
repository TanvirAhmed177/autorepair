import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar as NavBar, Container, Col, Row } from "react-bootstrap";

const Navbar = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0 col-12">
          <NavBar
            className="pr-5"
            bg="secondary"
            variant="dark"
            collapseOnSelect
            expand="md"
            sticky="top"
          >
            <NavBar.Brand className="pl-5 text-warning">
              Autorepair.
            </NavBar.Brand>
            <NavBar.Toggle aria-controls="responsive-navbar-nav" />
            <NavBar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link className="nav-link mr-3 text-warning" to="/">
                  Home
                </Link>
                <Link className="nav-link mr-3 text-warning" to="/login">
                  Login
                </Link>
                <Link className="nav-link mr-3 text-warning" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="nav-link mr-3 text-warning" to="/orders">
                  Your Orders
                </Link>
                <Link className="nav-link mr-3 text-warning" to="#">
                  Blogs
                </Link>
                <Link className="nav-link mr-3 text-warning" to="#">
                  Contact Us
                </Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
