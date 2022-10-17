import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css"
const Topbar = () => {
  const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
  return (
    <div>
      <Navbar bg="white" sticky={"top"} className="shadow" expand="lg">
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
              <NavDropdown show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} title="Faculty" id="basic-nav-dropdown">
              <Fade top>
              <NavDropdown.Item as={Link} to="/faculty">Faculty Home</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item as={Link} to="/faculty/Physics">
                Physics
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faculty/Chemistry">
                Chemistry
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faculty/Mathematics">
                Mathematics
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faculty/Commerce">
                Commerce
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faculty/Biology">
                Biology
              </NavDropdown.Item>
              </Fade>
            </NavDropdown>
              <Nav.Link as={NavLink} to="/campuses">
                Campuses
              </Nav.Link>
              <Nav.Link as={NavLink} to="/admissions">
                Admissions
              </Nav.Link>
              <Nav.Link as={NavLink} to="/gallery"> 
                Gallery
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
