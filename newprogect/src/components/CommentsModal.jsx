import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/commentModals.css"
import ListGroup from 'react-bootstrap/ListGroup';

const CommentsModal = ({close, asin}) => {
    const [bookComents, setBookComments] = useState(null);
    console.log(bookComents);
    const getCommentsFromBooks = async ()=>{
        
            try{
                const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`,{
                    headers: {
                        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNmM3ZWI5YzBmNzAwMTQ0ODRmYzEiLCJpYXQiOjE2ODg0NjU1MDYsImV4cCI6MTY4OTY3NTEwNn0.rMidtR5X0mcJ-WTOAIhWLNpao0dSrkR9lsbx8s_iZFw"
                        
                    },
                })
                const result = await data.json();
                setBookComments(result);



            }
            catch(error){
              console.log("error");
            }
        }
            useEffect(()=>{
                getCommentsFromBooks()
            },[asin])
        
    
  return (
    <div
    className="modal show commentsModal"
    style={{ display: 'block' }}
  >
    <Modal.Dialog centered size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {bookComents && bookComents.map((comment)=>{
            return(
                <ListGroup> 
                
                <ListGroup.Item>{comment.comment}</ListGroup.Item>
                <ListGroup.Item>Voto:{comment.rate}</ListGroup.Item>    
                </ListGroup>
            )
        })}
      </Modal.Body>

      <Modal.Footer>
        <Button  onClick={close} variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default CommentsModal
