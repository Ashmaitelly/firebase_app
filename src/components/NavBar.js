import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Book System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Administrator</Nav.Link>
            <Nav.Link href="/">Authors</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
