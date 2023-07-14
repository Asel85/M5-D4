import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommentsModal from './CommentsModal';
import { Link } from 'react-router-dom';

const CardBooks = ({img, title, asin, category, price}) => {
  const  [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);
  const toggleCommentsModal = () => setIsCommentsModalOpen(!isCommentsModalOpen);
  return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Title>
        {category}
      </Card.Title>
      <Card.Title>{price}</Card.Title>
      <Card.Text>{asin}</Card.Text>
      <Button onClick={toggleCommentsModal} variant="primary" className='me-3'>Commenti</Button>
      <Link to={`/book/${asin}`}>
      <Button variant='primary'>Vai Al Dettaglio</Button>
      </Link>
      
    </Card.Body>
  </Card>
  {isCommentsModalOpen && <CommentsModal asin={asin} close={toggleCommentsModal}/>}
    </>
    
  )
}

export default CardBooks
