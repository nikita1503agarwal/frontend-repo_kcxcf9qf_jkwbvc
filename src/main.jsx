import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'

// Pages
import Contact from './pages/Contact'
import Appointments from './pages/Appointments'
import Prescriptions from './pages/Prescriptions'
import Services from './pages/Services'
import Team from './pages/Team'
import Info from './pages/Info'
import ContactHours from './pages/ContactHours'
import About from './pages/About'
import News from './pages/News'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact-hours" element={<ContactHours />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
