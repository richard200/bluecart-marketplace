import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const query = new URLSearchParams(location.search).get('query');
      const response = await axios.get(`/api/products?query=${query}`);
      setProducts(response.data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [location]);

  return (
    <Container>
      <h2>Products</h2>
      {loading && <Spinner animation="border" />}
      {error && <p>{error}</p>}
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Price: ${product.price}
                  <br />
                  Rating: {product.rating}
                  <br />
                  Delivery cost: ${product.delivery_cost}
                  <br />
                  Mode of payment: {product.mode_of_payment}
                </Card.Text>
                <Card.Link href={`/product/${product.id}`}>See details</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;