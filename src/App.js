import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './views/Books';
import Book from './views/Book';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './views/AdminLogin';
import AuthorLogin from './views/AuthorLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/author" element={<AuthorLogin />} />
          <Route path="/home" element={<Books />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
