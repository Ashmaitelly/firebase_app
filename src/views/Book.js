import * as React from 'react';
import NavBar from '../components/NavBar';
import { Button } from 'react-bootstrap';
import { db } from '../firebase-config';
import { collection, getDoc, doc } from 'firebase/firestore';

const Book = () => {
  //book
  const [book, setBook] = React.useState(['Loading...']);
  //collection
  const [booksCollectionRef] = React.useState(collection(db, 'books'));

  //get book on load
  React.useEffect(() => {
    const getBook = async () => {
      const data = await getDoc(doc(db, 'books', 'ZcneE5QbevrGkVu7IWra'));

      setBook(data.data());
    };

    getBook();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="d-flex mt-2 mx-3">
        <img
          src={book.cover}
          alt="Carrie"
          style={{ width: '30%', height: '30%', float: 'left' }}
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
            <Button variant="danger">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
