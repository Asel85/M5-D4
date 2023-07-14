import React, { useEffect, useState } from 'react'
import MyNav from '../components/MyNav'
import { NavLink, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useFetch from '../hooks/useFetch';
import { nanoid } from 'nanoid';


const BookDetail = () => {
    const {bookId} = useParams()
   const {data, isLoading, error} = useFetch( "https://epibooks.onrender.com/" + bookId);
  const book = data[0];
  return (
    <>
     <MyNav/>
     <Container>
      <Row  className="justify-content-md-center mt-5">
        <Col lg={1} xs={1}>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={book.img} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Title>{book.category}</Card.Title>
      <Card.Title>{book.price}</Card.Title>
    </Card.Body>
  </Card></Col>
      </Row>
    </Container>
   

    </>
   

    
  )

  }
export default BookDetail 
