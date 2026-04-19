import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
