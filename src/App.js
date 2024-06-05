// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Boutiques from './components/Boutiques';
import Sites from './components/Sites';
import Parkings from './components/Parkings';
import Volontaires from './components/Volontaires';
import Evenements from './components/Evenements';
import FAQ from './components/FAQ';
import './index.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/boutiques" element={<Boutiques />} />
                    <Route path="/sites" element={<Sites />} />
                    <Route path="/parkings" element={<Parkings />} />
                    <Route path="/volontaires" element={<Volontaires />} />
                    <Route path="/evenements" element={<Evenements />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
