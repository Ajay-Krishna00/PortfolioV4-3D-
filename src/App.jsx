import React from "react";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Testimonial from "./Sections/Testimonial";
import Contact from "./Sections/contact";
import Footer from "./Sections/footer";
import Experience from "./Sections/Experience";
import TechStack from "./Sections/TechStack";
import SocialLinks from "./Components/SocialLinks";
import Cursor from "./Components/Cursor";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimonial />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
      {/* <Cursor/> */}
    </main>
  );
}

export default App;
