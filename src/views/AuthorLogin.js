import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase-config';
import { getDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AuthorLogin = () => {
  //navigate
  const navigate = useNavigate();
  //login items
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');
  //login function
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      try {
        const data = await getDoc(doc(db, 'authors', loginEmail.split('@')[0]));

        localStorage.setItem('authName', data.data().name);
      } catch (error) {
        throw new Error('Invalid Login');
      }

      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="sign position-absolute top-50 start-50 translate-middle">
      <h3>Author login</h3>
      <Form>
        <Form.Group className="mb-4 mt-4" controlId="formEmail">
          <Form.Control
            type="text"
            placeholder="Email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="mb-4"
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
        >
          Sign In
        </Button>
      </Form>
      <a href="/">Admin login</a>
    </div>
  );
};

export default AuthorLogin;
