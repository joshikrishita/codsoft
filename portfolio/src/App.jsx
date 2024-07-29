import { useState } from 'react'
import Navbar from './componets/Navbar/navbar';
import Intro from './componets/intro/intro'
import Skills from './componets/skills/skills'
import Projects from './componets/projects/projects'
import Achievement from './componets/achievements/achievement';
import Contact from './componets/contact/contact'
import Footer from './componets/footer/footer'


import './App.css'


function App() {
 

  return (
    <>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Achievement/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
