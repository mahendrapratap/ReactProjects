import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Blogs = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2 className='mt-2'>Blogs</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Blog Title 1</Card.Title>
              <Card.Text>
                This is a blog post. This is a blog post. This is a blog post.
              </Card.Text>
              <Card.Link href="#">Read More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Blog Title 2</Card.Title>
              <Card.Text>
                This is a blog post. This is a blog post. This is a blog post.
              </Card.Text>
              <Card.Link href="#">Read More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Blog Title 3</Card.Title>
              <Card.Text>
                This is a blog post. This is a blog post. This is a blog post.
              </Card.Text>
              <Card.Link href="#">Read More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;