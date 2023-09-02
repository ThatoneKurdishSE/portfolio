import React from 'react';
import Navbar from '../molecules/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Creations from '../pages/Creations';
import WorkWithMe from '../pages/WorkWithMe/WorkWithMe';
import Writings from '../pages/Writings';
import Footer from '../molecules/Footer/Footer';

function Routed() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/creations" exact element={<Creations />} />
        <Route path="/workwithme" exact element={<WorkWithMe />} />
        <Route path="/writings" exact element={<Writings />} />
    </Routes>
    {/* <Footer /> */}
</Router>
);
}

export default Routed;