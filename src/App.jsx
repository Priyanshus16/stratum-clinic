import "./App.css";
import NavBar from "./Components/NavBar";
import React from "react"
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import BlogPage from "./Components/Blog/BlogPage";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeroSection from './Components/HeroSection'
import AppointmentBooking from './Components/ApointmentBooking'
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/appointmentbooking" element={<AppointmentBooking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
