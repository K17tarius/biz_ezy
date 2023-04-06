import "./Header.css";
import { Outlet, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/images/B.png" className="logo"></img>Ayushmann Enterprises
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/analytics">About Us</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/registration">Customer Registeration</NavDropdown.Item>
              <NavDropdown.Item href="/vregistration">Vendor Registeration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">Customer Login</NavDropdown.Item>
              <NavDropdown.Item href="/vendorlisting">Vendor Login</NavDropdown.Item>
            </NavDropdown>
            <div className="searchbarHolder">
              <input placeholder="Search" className="searchbar"></input>
              <div className="searchbarBtn">
                <i className="fa fa-search"></i>
              </div>
            </div>
            <Nav.Link href="cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
