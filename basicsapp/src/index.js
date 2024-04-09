import { BrowserRouter, Routes, Route} from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Menu from "./components/Menu";
import Home from './components/Home';
import About from './components/About';
import Notfound from './components/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
    </BrowserRouter>
);
        



