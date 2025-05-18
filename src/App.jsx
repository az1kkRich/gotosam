import React, { useEffect, useLayoutEffect } from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import { Routes, Route } from 'react-router-dom';
import TourDetail from './components/tours/TourDetail';
import EventDetail from './components/events/EventDetail';

import './i18n';

function App() {

  useLayoutEffect(() => {
    let storedLang = localStorage.getItem("selectedLanguage")
    
    if (!storedLang) {
      localStorage.setItem("selectedLanguage", "en")
    }
  }, [])

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='tours/:id' element={<TourDetail />} />
        <Route path='events/:id' element={<EventDetail />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
