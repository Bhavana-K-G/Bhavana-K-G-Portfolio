import React from 'react'
import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import MyProjects from './components/MyProjects/MyProjects'
import MySkills from './components/MySkills/MySkills'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

const App = () => {
  return (
    <>
      <div style={{ position: "relative"}}>
        <Navbar />
        <Home />
        <AboutMe />
        <MySkills />
        <MyProjects />
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}

export default App