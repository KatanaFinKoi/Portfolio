import footer from './components/footer'
import header from './components/header'
import navbar from './components/navbar'
import { BrowserRouter, useNavigate, Route, } from 'react-router-dom'
import aboutMe from './Pages/aboutMe'
import contact from './Pages/contact'
import portfolio from './Pages/portfolio'
import resume from './Pages/resume'

import './App.css'

function app {
  return (
    <BrowserRouter>
      <header />
      <navbar />
      <Route path="/" exact component={aboutMe} />
      <Route path="/portfolio" component={portfolio} />
      <Route path="/contact" component={contact} />
      <Route path="/resume" component={resume} />
      <footer />
    </BrowserRouter>
  )
};



export default App

