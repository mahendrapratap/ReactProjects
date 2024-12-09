import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NoPage = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} className="text-center">
          <h2>404</h2>
          <h3>Page Not Found</h3>
          <p>The page you are looking for does not exist.</p>
          <Button variant="primary" href="/">Back to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NoPage;