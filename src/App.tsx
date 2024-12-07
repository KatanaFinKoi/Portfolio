import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import AboutMe from './Pages/aboutMe'
import Contact from './Pages/contact'
import Portfolio from './Pages/portfolio'
import Resume from './Pages/resume'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};



export default App

