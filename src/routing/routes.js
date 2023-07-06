import React from 'react';
import Navbar from '../molecules/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Creations from '../pages/Creations';
import WorkWithMe from '../pages/WorkWithMe';
import Blogs from '../pages/Blogs';

function Routed() {
return (
    <Router>
        <Navbar />
        <Routes>
        <Route path="/home" component={<Home />} />
        <Route path="/about" component={<About />} />
        <Route path="/creations" component={Creations} />
        <Route path="/workwithme" component={WorkWithMe} />
        <Route path="/blogs" component={Blogs} />
        </Routes>
    </Router>
);
}

export default Routed;