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
          <Col md={12} className="footer-col">
            <p>
            At Bluecart, we make it easy for you to compare prices and shop online for hundreds of thousands of different products in Kenya. Our goal is to help you save money and stay informed about the availability and pricing of products. Bluecart is powered by a machine that provides up-to-date prices, deals, and product information from trusted online stores selling original and high-quality products in Kenya.

We work impartially to ensure that you get the best possible shopping experience. We do not favor any particular online store over another, and we display products based on the best available prices in Kenya. 
We take pride in the quality of online stores we feature on Bluecart. Our filtering criteria ensure that online stores meet minimum quality requirements to provide the best shopping experience for our users.
If you are an online store and wish to be featured on Bluecart, please contact us at contact@bluecart.co.ke. Try us today for the best deals and cheapest prices in Kenya. Happy shopping!
            </p>
          </Col>

          
          {/* <Col md={4} className="footer-col">
          
            { <ul>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul> }
            
          </Col> */}
        </Row>
      </Container>

      
      {/* <!-- Footer --> */}
<footer class="text-center text-lg-start bg-light text-muted">
  {/* <!-- Section: Social media --> */}
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* <!-- Left --> */}
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div>
      <a href="#" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section class="">
    <div class="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div class="row mt-3">
        {/* <!-- Grid column --> */}
       
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
   Section: Links  

  {/* <!-- Copyright - */}
  <div class="text-center p-4" >
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}

    </div>
  );
};

export default Footer;
