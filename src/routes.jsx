import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';


const RoutesPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </BrowserRouter></div>
    )
}

export default RoutesPage