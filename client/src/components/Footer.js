import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col md={12} className="footer-col">
            <h2>Shopping Online Kenya!</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="footer-col">
            <p>
            At Bluecart, we make it easy for you to compare prices and shop online for hundreds of thousands of different products in Kenya. Our goal is to help you save money and stay informed about the availability and pricing of products. Bluecart is powered by a machine that provides up-to-date prices, deals, and product information from trusted online stores selling original and high-quality products in Kenya.

We work impartially to ensure that you get the best possible shopping experience. We do not favor any particular online store over another, and we display products based on the best available prices in Kenya. 
We take pride in the quality of online stores we feature on Bluecart. Our filtering criteria ensure that online stores meet minimum quality requirements to provide the best shopping experience for our users.
If you are an online store and wish to be featured on Bluecart, please contact us at contact@bluecart.co.ke. Try us today for the best deals and cheapest prices in Kenya. Happy shopping!
            </p>
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
