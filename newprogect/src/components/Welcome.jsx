import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Welcome = () => {
  return (
    <Container fluid>
    <Row>
      <Col>
      <h1 className='text-center p-5'>Welcome</h1>
      </Col>
    </Row>
  </Container>
  )
}

export default Welcome
