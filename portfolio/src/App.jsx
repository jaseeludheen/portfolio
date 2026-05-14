import { useState } from 'react'
import './styles/global.css' 

import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Hero onScrollTo={scrollTo} />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

    </>
  )
}

export default App
