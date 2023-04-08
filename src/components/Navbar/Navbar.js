import React from "react";
import "./Navbar.css";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Menu = () =>{

    return(
        <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Salsa Denim</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Skinny">Skinny</Nav.Link>
            <Nav.Link href="/Cargos">Cargos</Nav.Link>
            <Nav.Link href="/Culotte">Culotte</Nav.Link>
            <Nav.Link href="/Wide&Straights">Wide & Straights</Nav.Link>
            <Nav.Link href="/##">New Arrivals</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );            
};

export default Menu;
