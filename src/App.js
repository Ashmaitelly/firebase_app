import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Administrator from './views/Administrator';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Administrator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
