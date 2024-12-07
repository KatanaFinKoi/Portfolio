import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import aboutMe from './Pages/aboutMe'
import contact from './Pages/contact'
import portfolio from './Pages/portfolio'
import resume from './Pages/resume'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/aboutMe" component={aboutMe} />
        <Route path="/portfolio" component={portfolio} />
        <Route path="/contact" component={contact} />
        <Route path="/resume" component={resume} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
};



export default App

