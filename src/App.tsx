import Footer from './components/Footer.tsx'
import Navigation from './components/Header.tsx'
import { Routes, Route } from 'react-router-dom'
import AboutMe from './Pages/aboutMe.tsx'
import Contact from './Pages/contact.tsx'
import Portfolio from './Pages/portfolio.tsx'
import Resume from './Pages/resume.tsx'
import './index.css'

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route index element={<AboutMe />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  )
};



export default App

