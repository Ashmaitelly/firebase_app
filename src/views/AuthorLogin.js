import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AuthorLogin = () => {
  return (
    <div className="sign position-absolute top-50 start-50 translate-middle">
      <h3>Author login</h3>
      <Form>
        <Form.Group className="mb-4 mt-4" controlId="formName">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-4">
          Sign In
        </Button>
      </Form>
      <a href="/">Admin login</a>
    </div>
  );
};

export default AuthorLogin;
