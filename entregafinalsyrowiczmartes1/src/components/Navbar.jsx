import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <Navbar
    expand="lg"
    style={{
      backgroundColor: "skyblue",
      marginLeft: "1cm",
      marginRight: "1cm",
    }}
  >
    <Navbar.Brand
      as={NavLink}
      to="/"
      style={{ fontFamily: "'Playfair Display', serif", fontSize: "60px" }}
    >
      alimentoSaludableS
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/category/frutas">
          Frutas
        </Nav.Link>
        <Nav.Link as={NavLink} to="/category/verduras">
          Verduras
        </Nav.Link>
        <Nav.Link as={NavLink} to="/category/comidas caseras">
          Comidas caseras
        </Nav.Link>
       
      </Nav>
      <Nav className="ml-auto">
        <CartWidget />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
