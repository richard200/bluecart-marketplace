import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, ListGroup, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const fetchProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/product/${id}`);
      setProduct(response.data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <Container>
      <h2>Product Details</h2>
      {loading && <Spinner animation="border" />}
      {error && <p>{error}</p>}
      {product && (
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Rating: {product.rating}
              </ListGroup.Item>
              <ListGroup.Item>
                Delivery cost: ${product.delivery_cost}
              </ListGroup.Item>
              <ListGroup.Item>
                Mode of payment: {product.mode_of_payment}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                Marginal benefit: ${product.marginal_benefit}
              </ListGroup.Item>
              <ListGroup.Item>
                Cost benefit: ${product.cost_benefit}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default ProductDetails;