import * as React from 'react';
import NavBar from '../components/NavBar';
import { Button } from 'react-bootstrap';
import { db } from '../firebase-config';
import { collection, getDoc, doc, deleteDoc } from 'firebase/firestore';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Book = () => {
  //book
  const [book, setBook] = React.useState([]);
  //collection
  const [booksCollectionRef] = React.useState(collection(db, 'books'));
  //navigate
  const navigate = useNavigate();
  //url params
  const [searchParams] = useSearchParams();
  //get book on load
  React.useEffect(() => {
    const getBook = async () => {
      const data = await getDoc(doc(db, 'books', searchParams.get('id')));

      setBook(data.data());
    };

    getBook();
  }, []);
  //delet book
  const deleteBook = (id) => {
    const bookDoc = doc(db, 'books', id);
    deleteDoc(bookDoc);
    navigate('/home');
  };

  return (
    <div>
      <NavBar />
      <div className="d-flex mt-2 mx-3">
        <img
          src={book.cover}
          alt={book.title}
          style={{ width: '20%', height: '20%', float: 'left' }}
        ></img>
        <div className="mx-2 text-left">
          <h2>{book.title}</h2>
          <p>
            by {book.author} on {book.date}
          </p>
          <p>Status: {book.status}</p>
          <p clasname="text-left" style={{ float: 'left' }}>
            {book.brief}{' '}
          </p>
          <div>
            <Button className="mx-2">Edit</Button>
            <Button
              variant="danger"
              onClick={() => {
                deleteBook(searchParams.get('id'));
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
