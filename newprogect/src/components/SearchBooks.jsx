import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBooks = ({books, setBooks, getBooks}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filterBooks = (e)=>{
      e.preventDefault();
    
    const filterBooks = books.filter((book)=>book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filterBooks);
  };
  const handleResetSearchBar = (value)=>{
    if (value === ""){
      getBooks()
    }
  }
handleResetSearchBar();

  return (
    <Container>
      <Row>
        <Col className='pt-5 pb-5'>
          <Form onSubmit={filterBooks}>
        <Form.Control  type="text" placeholder="Cearch book" className='mb-3' onChange={(e)=> handleResetSearchBar(e.target.value)}/>
        <Button variant="primary" type="submit" >
        Cerca
      </Button>
      </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBooks
