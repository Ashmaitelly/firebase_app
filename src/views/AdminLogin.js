import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
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
      localStorage.setItem('isAdmin', true);
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="sign position-absolute top-50 start-50 translate-middle">
      <h3>Admin login</h3>
      <Form>
        <Form.Group className="mb-4 mt-4" controlId="formUsername">
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

      <a href="/a">Author login</a>
    </div>
  );
};

export default AdminLogin;
