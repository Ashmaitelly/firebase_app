import React from 'react';
import NavBar from '../components/NavBar';
import { Button } from 'react-bootstrap';

const Book = () => {
  return (
    <div>
      <NavBar />
      <div className="d-flex mt-2 mx-3">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/916W3jMu+mL.jpg"
          alt="Carrie"
          style={{ width: '30%', height: '30%', float: 'left' }}
        ></img>
        <div className="mx-2 text-left">
          <h2>Carrie</h2>
          <p>by Stephen King on April 4 1974</p>
          <p>Status: Published</p>
          <p clasname="text-left" style={{ float: 'left' }}>
            The story of misfit high-school girl, Carrie White, who gradually
            discovers that she has telekinetic powers. Repressed by a
            domineering, ultra-religious mother and tormented by her peers at
            school, her efforts to fit in lead to a dramatic confrontation
            during the senior prom.{' '}
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
