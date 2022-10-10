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
            <a  className="footer-logo">Time Collegiate</a>
            <p className="copyright">
              <small>&copy; 2019</small>
            </p>
          </Col>
          <Col sm>
            <h3>Company</h3>
            <ListGroup className="links">
              <li><a >Home</a></li>
              <li><a >About us</a></li>
              <li><a >Faculty</a></li>
              <li><a >Gallery</a></li>
              <li><a >Contact us</a></li>
            </ListGroup>
          </Col>
          <Col sm>
            <h3>Further Information</h3>
            <ListGroup className="links">
              <li><a>Terms &amp; Conditions</a></li>
              <li><a>Privacy Policy</a></li>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h3>Follow us</h3>
            <ListGroup className="gap-1 social" horizontal>
              <li><a href="https://www.facebook.com/Timecollegiate" target={"_blank"} rel="noreferrer"><span><BsFacebook style={{height:"30px", width:"30px"}}/></span></a></li>
              <li><a href="https://www.instagram.com/time_collegiate/?hl=en"target={"_blank"} rel="noreferrer"><span><AiOutlineTwitter style={{height:"36px", width:"36px"}}/></span></a></li>
              <li><a href="https://www.instagram.com/time_collegiate/?hl=en"target={"_blank"} rel="noreferrer"><span><AiOutlineInstagram style={{height:"36px", width:"36px"}}/></span></a></li>
              <li><a href="https://www.instagram.com/time_collegiate/?hl=en"target={"_blank"} rel="noreferrer"><span><AiFillLinkedin style={{height:"36px", width:"36px"}}/></span></a></li>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  </footer>


  
  

  )
}

export default Footer
