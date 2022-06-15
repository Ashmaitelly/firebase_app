import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  //log out function
  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
    navigate('/');
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Book System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Books</Nav.Link>
            {localStorage.getItem('isAdmin') ? (
              ''
            ) : (
              <Nav.Link href="/author">Authors</Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
