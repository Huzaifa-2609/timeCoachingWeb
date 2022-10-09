import React from 'react'
import { Container } from 'react-bootstrap'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer-20192">
    <div className="site-section">
      <div className="container">
        <div className="row">

          <div className="col-sm">
            <a href="#" className="footer-logo">Colorlib</a>
            <p className="copyright">
              <small>&copy; 2019</small>
            </p>
          </div>
          <div className="col-sm">
            <h3>Customers</h3>
            <ul className="list-unstyled links">
              <li><a href="#">Buyer</a></li>
              <li><a href="#">Supplier</a></li>
            </ul>
          </div>
          <div className="col-sm">
            <h3>Company</h3>
            <ul className="list-unstyled links">
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div className="col-sm">
            <h3>Further Information</h3>
            <ul className="list-unstyled links">
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Follow us</h3>
            <ul className="list-unstyled social">
              <li><a href="#"><span className="icon-facebook"></span></a></li>
              <li><a href="#"><span className="icon-twitter"></span></a></li>
              <li><a href="#"><span className="icon-linkedin"></span></a></li>
              <li><a href="#"><span className="icon-medium"></span></a></li>
              <li><a href="#"><span className="icon-paper-plane"></span></a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </footer>


  
  

  )
}

export default Footer
