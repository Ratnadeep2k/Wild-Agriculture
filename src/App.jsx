import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services/>} />
    </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default App