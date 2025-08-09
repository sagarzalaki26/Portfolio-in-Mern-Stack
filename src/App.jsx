import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Pages/Navbar'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Skills from './Components/Pages/Skills'
import Certificates from './Components/Pages/Certificate'
import Projects from './Components/Pages/Projects'
import Contact from './Components/Pages/Contact'
import Footer from './Components/Pages/Footer'

function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Certificates/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
