import React, { Suspense } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader";
import DemoComputer from "../Components/DemoComputer";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(0);
  const currentProject = myProjects[selectedProject];
  const handleNavigation = (direction) => {
    setSelectedProject((prev) => {
      if (direction === "next") {
        return (prev + 1) % projectCount;
      }
      if (direction === "previous") {
        return prev === 0 ? projectCount - 1 : prev - 1;
      }
    });
  };
  return (
    <section className="sm:px-20 px-5 my-20" id="projects">
      <p className="head-text">Projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-[50px] h-[50px] shadow-sm rounded-md"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img
                src="/assets/arrow-up.png"
                className="w-3 h-3 ml-1"
                alt="arrow"
              />
            </a>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-5">
            {myProjects.map((_, index) => {
              return (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer ${index === selectedProject ? "bg-white" : "bg-gray-700"}`}
                  onClick={() => {
                    setSelectedProject(index);
                  }}
                ></div>
              );
            })}
          </div>
          <div className="flex justify-between item-center mt-3">
            <button
              className="arrow-btn"
              onClick={() => {
                handleNavigation("previous");
              }}
            >
              <img
                src="/assets/left-arrow.png"
                alt="previous"
                className=" bg-black-200 "
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => {
                handleNavigation("next");
              }}
            >
              <img
                src="/assets/right-arrow.png"
                alt="next"
                className=" bg-black-200 "
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={3} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Center>
              <Suspense>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
