
import { useState } from 'react'
import './App.css'
import About from './components/About'
import Chairman from './components/Chairman'
import Contact from './components/Contact'
import Departments from './components/Departments'
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import TimeTable from './components/TimeTable'

function App() {
  const [active, setActive] = useState()
  return (
    <>
      <Header active={"home"} />
      <Hero />
      <About />
      <Chairman />
      <Departments />
      <TimeTable />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App
