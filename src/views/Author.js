import * as React from 'react';
import NavBar from '../components/NavBar';
import { Button, Form } from 'react-bootstrap';
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Author = () => {
  const navigate = useNavigate();
  //collection
  const [booksCollectionRef] = React.useState(collection(db, 'books'));
  //fields to add
  const [title, setTitle] = React.useState('');
  const [cover, setCover] = React.useState('');
  const [brief, setBrief] = React.useState('');
  //
  const createBook = async () => {
    try {
      await addDoc(booksCollectionRef, {
        title: title,
        cover: cover,
        brief: brief,
        status: 'Published',
        author: localStorage.getItem('authName'),
        date: new Date(Date.now()).toLocaleString().split(',')[0],
      });
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <NavBar />
      <div className="sign position-absolute top-50 start-50 translate-middle">
        <h3>Add book</h3>
        <Form>
          <Form.Group className="my-4" controlId="formEmail">
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Control
              type="text"
              placeholder="Cover link"
              onChange={(event) => {
                setCover(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Brief"
              onChange={(event) => {
                setBrief(event.target.value);
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mb-4"
            onClick={(e) => {
              e.preventDefault();
              createBook();
            }}
          >
            Add book
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Author;
