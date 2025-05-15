import React from "react";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Testimonial from "./Sections/Testimonial";
import Contact from "./Sections/contact";
import Footer from "./Sections/footer";
import Experience from "./Sections/Experience";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonial />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
