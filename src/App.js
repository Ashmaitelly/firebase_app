import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './views/Books';
import Book from './views/Book';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './views/AdminLogin';
import AuthorLogin from './views/AuthorLogin';
import Author from './views/Author';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/a" element={<AuthorLogin />} />
          <Route path="/home" element={<Books />} />
          <Route path="/book" element={<Book />} />
          <Route path="/author" element={<Author />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
