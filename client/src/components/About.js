
import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <h2>About</h2>
      <p>
        Shopcrawl is a project created by a team of full stack developers using React and Ruby on Rails. It is a tool that helps you find the best deals for your online shopping. It crawls the data from different e-commerce sites and compares the marginal benefit and cost benefit of each product based on your preferences and budget.
      </p>
      <p>
        The project was inspired by the problem statement of Project 3: BlueCart Marketplace, which was one of the challenges in the Microsoft AI Classroom Series. The team wanted to create a solution that would help online shoppers make better decisions and save money and time.
      </p>
      <p>
        The team members are:
        - Alice: Frontend developer and designer
        - Bob: Backend developer and tester
        - Charlie: Data analyst and crawler
        - David: Project manager and documentation
      </p>
      <p>
        You can contact us at shopcrawl@gmail.com or follow us on GitHub, Twitter, and Facebook.
      </p>
    </Container>
  );
}

export default About;
