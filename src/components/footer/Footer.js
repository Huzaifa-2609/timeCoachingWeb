import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import "./footer.css"
import {BsFacebook} from "react-icons/bs"
import {AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="footer-20192">
    <div className="site-section">
      <Container>
        <Row>
          <Col sm>
            <a href="#" className="footer-logo">Time Collegiate</a>
            <p className="copyright">
              <small>&copy; 2019</small>
            </p>
          </Col>
          <Col sm>
            <h3>Company</h3>
            <ListGroup className="links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Faculty</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact us</a></li>
            </ListGroup>
          </Col>
          <Col sm>
            <h3>Further Information</h3>
            <ListGroup className="links">
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h3>Follow us</h3>
            <ListGroup className="gap-1 social" horizontal>
              <li><a href="#"><span><BsFacebook style={{height:"30px", width:"30px"}}/></span></a></li>
              <li><a href="#"><span><AiOutlineTwitter style={{height:"36px", width:"36px"}}/></span></a></li>
              <li><a href="#"><span><AiOutlineInstagram style={{height:"36px", width:"36px"}}/></span></a></li>
              <li><a href="#"><span><AiFillLinkedin style={{height:"36px", width:"36px"}}/></span></a></li>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  </footer>


  
  

  )
}

export default Footer
