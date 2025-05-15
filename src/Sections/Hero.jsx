import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../Components/HackerRoom";
import CanvasLoader from "../Components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import Target from "../Components/Target";
import HeroCamera from "../Components/HeroCamera";
import Button from "../Components/Button";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  return (
    <section
      className="min-h-screen w-full flex flex-col relative overflow-hidden"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col mt-20 sm:mt-30 c-space gap-3 ">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I'm Ajay Krishna
          <span className="waving-hand">👋</span>
        </p>
        <p
          className={`hero_tag text-gray_gradient ${isMobile ? "mt-8" : "mt-0"}`}
        >
          Engineering ideas into reality
        </p>
      </div>

      <div className="absolute inset-0 w-full h-full z-0">
        {/* <Leva/> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 32]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={isMobile ? 0.06 : isTablet ? 0.07 : 0.1}
                position={[0.5, -7.2, 3.4]}
                rotation={[0.3, 3.1, 0.0]}
              />
            </HeroCamera>
            <Target />
            <ambientLight intensity={2} />
            <directionalLight position={[0, 10, 5]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-5 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit ">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
