import React from "react";
// import ProjectsGrid from "./components/ProjectsGrid";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from './components/StatsSection'
import Marquee from "./components/Marquee";
import Courses from "./components/Courses";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div className="font-[Poppins]">
      <Navbar />
      <Hero />
      <Marquee/>
      <About/>
      <StatsSection/>
      <Courses/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
