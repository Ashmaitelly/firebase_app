import * as React from 'react';
import NavBar from '../components/NavBar';
import { Button, Form } from 'react-bootstrap';

const Author = () => {
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
              // onChange={(event) => {
              //   setLoginEmail(event.target.value);
              // }}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Control
              type="text"
              placeholder="Cover link"
              // onChange={(event) => {
              //   setLoginEmail(event.target.value);
              // }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Brief" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mb-4"
            onClick={(e) => {
              e.preventDefault();
              // login();
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
