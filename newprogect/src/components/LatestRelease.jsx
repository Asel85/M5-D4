import React,{ useEffect, useState } from 'react';
import CardBooks from './CardBooks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBooks from './SearchBooks';

const LatestRelease = () => {
    const [books, setBooks] = useState([]);

      const getBooksFromApi = async ()=>{
        try{
          const data = await fetch (" https://epibooks.onrender.com/");
        const result = await data.json();
        setBooks(result);
        console.log(result)
        }
       
       catch (error){
        console.log("error")
       }
    }

    useEffect(()=>{
      getBooksFromApi()
     }, []);

  return (
    <>
     <SearchBooks books={books} setBooks={setBooks} getBooks={getBooksFromApi}/>
    <Container>
    <Row>
      <Col className='d-flex gap-5 flex-wrap pt-5 pb-5'>
      {books && books.map((book) => {
        return(
          <CardBooks
        key={book.asin}
        img={book.img}
        title = {book.title}
        category={book.category}
        ptice={book.price}
        asin={book.asin}

        />
        )
        
      })}
      </Col>
    </Row>
  </Container>
  </>
  )
}

export default LatestRelease
