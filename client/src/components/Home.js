import React from "react";
import { Container, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";

function Jumbotron({ children }) {
  return (
    <div style={{ padding: "2rem 1rem", margin: "2rem 0", backgroundColor: "#e9ecef", borderRadius: ".3rem" }}>
      <Container>{children}</Container>
    </div>
  );
}

function Home() {
  return (
    <Container>
      <Jumbotron>
        <h1>Welcome to Shopcrawl</h1>
        <p>
          Shopcrawl is a tool that helps you find the best deals for your online shopping. It crawls the data from different e-commerce sites and compares the marginal benefit and cost benefit of each product based on your preferences and budget.
        </p>
        <p>
          <Button variant="primary" href="/products">Start Shopping</Button>
        </p>
      </Jumbotron>
      <SearchBar />
    </Container>
  );
}

export default Home;