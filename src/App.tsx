import { useState } from 'react'

import './App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'
import Education from '../pages/Education'
function App() {
  

  return (
    <>
      <Navbar />
    <Home />
    <About />
    <Education />
    <Contact />
    <Footer />
       
  </>  
   
  )
}

export default App
