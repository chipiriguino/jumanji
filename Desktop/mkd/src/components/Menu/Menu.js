import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './Menu.css';

export default function Menu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bgNav" variant="dark">
        <Navbar.Brand href="/">MKD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Quienes somos</Nav.Link>
            <Nav.Link href="/">Productos</Nav.Link>
            <Nav.Link href="/">Servicios</Nav.Link>
            <Nav.Link href="/">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
