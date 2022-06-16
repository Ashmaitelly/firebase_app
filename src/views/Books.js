import * as React from 'react';
import NavBar from '../components/NavBar';
import { Stack, Card } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const Books = () => {
  //author name
  const [searchParams] = useSearchParams();
  const [author] = React.useState(searchParams.get('author'));
  //navigate
  const navigate = useNavigate();
  //books
  const [books, setBooks] = React.useState([]);
  //collection
  const [booksCollectionRef] = React.useState(collection(db, 'books'));
  //get books on load
  React.useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(booksCollectionRef);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBooks();
  });
  return (
    <div>
      <NavBar />
      <Stack
        gap={3}
        className="d-flex  flex-column justify-content-center mt-2"
      >
        {books
          .filter((book) => !author || book.author === author)
          .map((book) => (
            <Card
              key={book.id}
              className="mx-auto d-inline-block text-align-center"
              style={{ width: '50%', cursor: 'pointer' }}
              onClick={() => navigate(`/book?id=${book.id}`)}
            >
              <img
                src={book.cover}
                alt={book.title}
                style={{ width: '20%', height: '18%', float: 'left' }}
              ></img>
              <h3>{`${book.title}`}</h3>
              <p>By {book.author}</p>
              <p>{book.brief}</p>
            </Card>
          ))}
      </Stack>
    </div>
  );
};

export default Books;
