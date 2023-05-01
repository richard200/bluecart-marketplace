import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import "./Footer.css";
import BluecartDevices from "./BluecartDevices";

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row className="footer-top">
          <Col md={6} className="footer-top-left">
            <ul>
              <li>
                <a href="http://localhost:4000/about">About Bluecart</a>
              </li>
              <li>
                <a href="">Bluecart Devices</a>
              </li>
            </ul>
          </Col>
          <Col md={6} className="footer-top-right">
            <ul>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="footer-middle">
          <Col md={3} className="footer-col">
            <h4>Get to Know Us</h4>
            <ul>
              <li>
                <a href="#">About Bluecart</a>
              </li>
              <li>
                <a href="#">Our Policies</a>
              </li>
              <li>
                <a href="#">Help & Support</a>
              </li>
            </ul>
          </Col>
          <Col md={9} className="footer-col">
            <BluecartDevices />
          </Col>
        </Row>
        <hr />
        <Row className="footer-bottom">
          <Col md={6} className="footer-bottom-left">
            <p>
              &copy; {new Date().getFullYear()} Bluecart Marketplace. All Rights
              Reserved.
            </p>
          </Col>
          <Col md={6} className="footer-bottom-right">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <ScrollToTop
        smooth
        style={{
          backgroundColor: "#c7a948",
          borderRadius: "50%",
          bottom: "20px",
          right: "20px",
        }}
      />
    </div>
  );
};

export default Footer;
