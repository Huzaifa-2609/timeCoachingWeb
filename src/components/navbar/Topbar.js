import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <div>
      <Navbar bg="white" sticky={"top"} className="shadow" expand="lg">
        <Container>
          <Navbar.Brand href="/">Time Collegiate Logo</Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <NavLink className={"text-muted"} to="/">Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className={"text-muted"} to="/about">About us</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink  className={"text-muted"} to="/faculty">Faculty</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink  className={"text-muted"} to="/campuses">Campuses</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink  className={"text-muted"} to="/admissions">Admissions</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className={"text-muted"} to="/gallery">Gallery</NavLink>
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
