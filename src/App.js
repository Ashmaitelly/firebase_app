import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Administrator from './views/Administrator';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './views/AdminLogin';
import AuthorLogin from './views/AuthorLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/Author" element={<AuthorLogin />} />
          <Route path="/Home" element={<Administrator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
