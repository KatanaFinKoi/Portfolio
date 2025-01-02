import Footer from './components/footer'
import Navigation from './components/header'
import { Routes, Route } from 'react-router-dom'
import AboutMe from './Pages/aboutMe'
import Contact from './Pages/contact'
import Portfolio from './Pages/portfolio'
import Resume from './Pages/resume'
import Gallery from './Pages/gallery'
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
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  )
};



export default App

