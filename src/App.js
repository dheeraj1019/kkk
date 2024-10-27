import React from 'react';
import Frontpage from './pages/frontpage';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookRideSearch from './pages/search';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Frontpage />} />
          <Route path='/search' element={<BookRideSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
