import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css"
const Topbar = () => {
  return (
    <div>
      <Navbar bg="white" sticky={"top"} className="shadow " expand="lg">
        <Container className="">
          <Navbar.Brand href="/">Time Collegiate Logo</Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navColor">
              <Nav.Link as={NavLink}  to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/faculty">
                Faculty
              </Nav.Link>
              <Nav.Link as={NavLink} to="/campuses">
                Campuses
              </Nav.Link>
              <Nav.Link as={NavLink} to="/admissions">
                Admissions
              </Nav.Link>
              <Nav.Link as={NavLink} to="/gallery"> 
                Gallery
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
