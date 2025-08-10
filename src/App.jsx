import { useState } from 'react'

import './App.css'
import Navbar from './Components/Pages/Navbar'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Skills from './Components/Pages/Skills'
import Certificates from './Components/Pages/Certificate'
import Projects from './Components/Pages/Projects'
import Contact from './Components/Pages/Contact'
import Footer from './Components/Pages/Footer'
import Dashboard from './Components/Admin/Dashboard'
import Signin from './Components/Admin/AdminLogin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Port() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Port/>} />
      


          <Route path="/login" element={<Signin />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App

