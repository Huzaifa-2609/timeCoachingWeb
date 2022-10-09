import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Topbar = () => {
  return (
    <div>
      <Navbar bg="white" sticky={"top"} className='shadow'  expand="lg">
      <Container>
        <Navbar.Brand >Time Collegiate Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Faculty</Nav.Link>
            <Nav.Link href="#link">Campuses</Nav.Link>
            <Nav.Link href="#link">Admissions</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
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
  )
}

export default Topbar
