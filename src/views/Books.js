import * as React from 'react';
import NavBar from '../components/NavBar';
import { Stack, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const Books = () => {
  const navigate = useNavigate();
  //books
  const [books, setBooks] = React.useState(['Loading...']);
  //collection
  const booksCollectionRef = React.useState(collection(db, 'books'));
  //get books on load
  React.useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(booksCollectionRef);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBooks();

    console.log(books);
  });
  return (
    <div>
      <NavBar />
      <Stack
        gap={3}
        className="d-flex  flex-column justify-content-center mt-2"
      >
        <Card
          className="mx-auto d-inline-block text-align-center"
          style={{ width: '50%', cursor: 'pointer' }}
          onClick={() => navigate('/book')}
        >
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/916W3jMu+mL.jpg"
            alt="Carrie"
            style={{ width: '20%', height: '18%', float: 'left' }}
          ></img>
          <h3>Carrie (1974)</h3>
          <p>By Stephen King </p>
          <p>
            The story of misfit high-school girl, Carrie White, who gradually
            discovers that she has telekinetic powers. Repressed by a
            domineering, ultra-religious mother and tormented by her peers at
            school, her efforts to fit in lead to a dramatic confrontation
            during the senior prom.
          </p>
        </Card>
      </Stack>
    </div>
  );
};

export default Books;
