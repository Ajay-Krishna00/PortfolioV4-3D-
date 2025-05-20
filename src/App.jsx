import React, { useState } from "react";
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
import CusLoader from "./Components/Loader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = () => {
    setIsLoaded(true);
  };
  return (
    <main>
      {!isLoaded && <CusLoader onFinish={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <Navbar />
          <Hero setIsLoaded={handleLoad} />
          <About />
          <TechStack />
          <Projects />
          <Testimonial />
          <Experience />
          <Contact />
          <Footer />
          <SocialLinks />
          {/* <Cursor/> */}
        </>
      )}
    </main>
  );
}

export default App;
