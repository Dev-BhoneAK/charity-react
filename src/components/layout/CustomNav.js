import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const CustomNav = () => {
  return (
    <Navbar expand="sm" className="header-nav position-absolute top-0">
      <Container fluid className="px-5">
        <Navbar.Brand href="/" className="navbar-brand">
          Charity
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/donations" className="nav-link">
              Donations
            </Link>
            <Link to="/events" className="nav-link">
              Events
            </Link>
            <Link to="/articles" className="nav-link">
              Articles
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CustomNav;
