import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col md={4} className="footer-col">
            <h4>
              <a href="/about-us">About Us</a>
            </h4>
            <p>
            BlueCart is a platform that helps you compare prices from
              different e-commerce sites and find the best deals. We are not
              affiliated with any of the sites or products we display. We are
              just here to help you save money and time.
            </p>
          </Col>
          <Col md={4} className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/e-compare">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/facebook.png"
                  alt="Facebook"
                />
              </a>
              <a href="https://www.twitter.com/e-compare">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                  alt="Twitter"
                />
              </a>
              <a href="https://www.instagram.com/e-compare">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/instagram.png"
                  alt="Instagram"
                />
              </a>
            </div>
          </Col>
          <Col md={4} className="footer-col">
            <ul>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
