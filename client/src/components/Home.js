import React from "react";
import { Container, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import logo from "./logo.png"; // import your logo image here
import bgImage from "./bg.jpg"; // import your background image here

// define some custom styles
const styles = {
  jumbotron: {
    position: "relative",
    height: "80vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `url(${bgImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
  },
  logo: {
    width: "200px", // change the logo size as you like
    marginBottom: "2rem",
  },
  title: {
    fontSize: "5rem", // change the title size as you like
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "2rem", // change the subtitle size as you like
    fontWeight: "normal",
    marginBottom: "2rem",
  },
  button: {
    backgroundColor: "#f49b42", // change the button color as you like
    borderColor: "#f49b42", // change the button border color as you like
    borderRadius: "30px", // change the button border radius as you like
    padding: "1rem 2rem", // change the button padding as you like
    fontSize: "1.5rem", // change the button font size as you like
    fontWeight: "bold", // change the button font weight as you like
    fontFamily: "'Roboto', sans-serif", // change the button font as you like
  },
};

function Jumbotron({ children }) {
  return (
    <div style={styles.jumbotron}>
      <div style={styles.overlay}></div>
      <Container style={styles.content}>{children}</Container>
    </div>
  );
}

function Home() {
  return (
    <Container fluid>
      <Jumbotron>
        <img src={logo} alt="logo" style={styles.logo} /> add your logo image here
        <h1 style={styles.title}>Welcome to BlueCart</h1>
        <p style={styles.subtitle}>
          BlueCart is a tool that helps you find the best deals for your online shopping. It crawls the data from different e-commerce sites and compares the marginal benefit and cost benefit of each product based on your preferences and budget.
        </p>
        <p>
          <Button variant="primary" href="/products" style={styles.button}>
            Start Shopping
          </Button>
        </p>
      </Jumbotron>
      <SearchBar />
    </Container>
  );
}

export default Home;
