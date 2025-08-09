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
import Sidebar from './Components/Admin/Sidebar'
import Dashboard from './Components/Admin/Dashboard'
import Signin from './Components/Admin/AdminLogin'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Signin/>
     {/* <Skills/> */}
       {/* <Projects/> */}
     {/*
     <Home/>
     <About/>
    
     <Certificates/>
   
     <Contact/>
     <Footer/> */}
   {/* <Dashboard/> */}
   </BrowserRouter>
    </>

  )
}

export default App
