import * as React from 'react';
import NavBar from '../components/NavBar';
import { Button } from 'react-bootstrap';
import { db } from '../firebase-config';
import { getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Book = () => {
  //editing page
  const [edit, setEdit] = React.useState(false);
  //book
  const [book, setBook] = React.useState([]);
  //navigate
  const navigate = useNavigate();
  //url params
  const [searchParams] = useSearchParams();
  //fields to update
  //fields to add
  const [title, setTitle] = React.useState('');
  const [brief, setBrief] = React.useState('');
  //get book on load
  React.useEffect(() => {
    const getBook = async () => {
      const data = await getDoc(doc(db, 'books', searchParams.get('id')));

      setBook(data.data());
      setTitle(book.title);
      setBrief(book.brief);
    };

    getBook();
  }, [searchParams, book.title, book.brief]);
  //delete book
  const deleteBook = (id) => {
    const bookDoc = doc(db, 'books', id);
    deleteDoc(bookDoc);
    navigate('/home');
  };
  //edit book
  const editBook = async () => {
    try {
      const bookDoc = doc(db, 'books', searchParams.get('id'));
      const newFields = { title: title, brief: brief };
      await updateDoc(bookDoc, newFields);
      book.title = title;
      book.brief = brief;
      setEdit(false);
    } catch (error) {
      alert(error.message);
    }
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
          <h2>
            {edit ? (
              <input
                type="text"
                name="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            ) : (
              book.title
            )}
          </h2>
          <p>
            by <a href={`/home?author=${book.author}`}>{book.author}</a> on{' '}
            {book.date}
          </p>
          <p>Status: {book.status}</p>
          <p clasname="text-left mb-3" style={{ float: 'left' }}>
            {edit ? (
              <textarea
                name="brief"
                rows="4"
                cols="50"
                value={brief}
                onChange={(event) => {
                  setBrief(event.target.value);
                }}
              ></textarea>
            ) : (
              book.brief
            )}{' '}
          </p>

          {(localStorage.getItem('isAdmin') ||
            localStorage.getItem('authName') === book.author) &&
            !edit && (
              <div>
                <Button className="mx-2" onClick={() => setEdit(true)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    deleteBook(searchParams.get('id'));
                  }}
                >
                  Delete
                </Button>
              </div>
            )}
          {edit && (
            <div>
              <Button
                className="mx-2"
                onClick={() => {
                  editBook();
                }}
              >
                Save
              </Button>
              <Button variant="danger" onClick={() => setEdit(false)}>
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
