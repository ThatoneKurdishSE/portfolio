import './App.css';
import React from 'react';
import Navbar from './molecules/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Creations from './pages/Creations';
import WorkWithMe from './pages/WorkWithMe';
import Blogs from './pages/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/creations" exact element={<Creations />} />
          <Route path="/workwithme" exact element={<WorkWithMe />} />
          <Route path="/blogs" exact element={<Blogs />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
