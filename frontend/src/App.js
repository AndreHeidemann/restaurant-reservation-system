import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Menu from './components/Menu';
import ReservationForm from './components/ReservationForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/menu">Menu</Link> | <Link to="/reserve">Reserve</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Welcome to Our Restaurant</h2>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reserve" element={<ReservationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
