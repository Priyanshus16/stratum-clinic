import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import BlogPage from "./Blog/BlogPage";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <BlogPage />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
