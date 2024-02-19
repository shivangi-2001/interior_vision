import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom'
import AboutUs from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import FAQs from './pages/faq';

function App() {

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
