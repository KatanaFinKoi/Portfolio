
import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import AboutMe from './Pages/aboutMe'
import Contact from './Pages/contact'
import Portfolio from './Pages/portfolio'
import Resume from './Pages/resume'
import './App.css'

const Layout = () => (
  <div className="container">
    <Header /> {/* Navbar stays on all pages */}
    <Outlet /> {/* Renders the matched child route's element */}
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
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

