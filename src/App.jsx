import React from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import { Routes, Route } from 'react-router-dom';
import TourDetail from './components/tours/TourDetail';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='tours/:id' element={<TourDetail />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
