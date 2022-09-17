import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const CustomNav = () => {

    return (
        <Navbar expand="sm" className="header-nav position-absolute top-0">
            <Container fluid className="px-5">
                <Navbar.Brand href="/" className="navbar-brand">Charity</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
                <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="/donations" className="nav-link">Donations</Nav.Link>
                        <Nav.Link href="/events" className="nav-link">Events</Nav.Link>
                        <Nav.Link href="/articles" className="nav-link">Articles</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default CustomNav;