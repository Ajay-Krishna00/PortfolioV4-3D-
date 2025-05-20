import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../Components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const globe = useRef();

  useEffect(() => {
    if (globe.current) {
      globe.current.controls().autoRotate = true;
      globe.current.controls().autoRotateSpeed = 3;
    }
  });

  const handleCopy = () => {
    navigator.clipboard.writeText("ajaykrishna2405@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="sm:px-20 px-5 my-20" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container cardHoverer">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Ajay Krishna D</p>
              <p className="grid-subtext">
                I'm a Full-stack developer and CSE undergrad passionate about
                crafting clean, efficient, and user-focused web experiences.
                <br /> I love building things that solve problems — from idea to
                deployment!
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container cardHoverer">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">What I'm About</p>
              <p className="grid-subtext">
                I'm driven by curiosity and the thrill of bringing ideas to life
                with code. Whether it's a solo project or a team collab, I aim
                for thoughtful UX, solid architecture, and shipping stuff that
                actually works.
                <br />
                When I'm not building, I'm breaking things to learn how they
                work.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container cardHoverer">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globe}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl={
                  "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                }
                bumpImageUrl={
                  "//unpkg.com/three-globe/example/img/earth-topology.png"
                }
              />
            </div>
            <div>
              <p className="grid-headtext">
                Open to Remote Work Across Timezones
              </p>
              <p className="grid-subtext">
                Remote-friendly.
                <br /> Timezone-flexible.
                <br /> Ready to collaborate from anywhere the internet reaches.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass={"w-full mt-10"}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container cardHoverer">
            <img
              src="/assets/grid3.png"
              alt="grid3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Dev Journey So Far</p>
              <p className="grid-subtext">
                From late-night problem-solving sessions to real-world projects,
                I've been honing my skills in both frontend and backend
                development.
                <br />
                Through hackathons, team projects, and open-source
                contributions, I've grown into a dev who writes code that’s not
                just clever — but maintainable and meaningful.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container cardHoverer">
            <img
              src="/assets/grid4.png"
              alt="grid4"
              className="w-full h-fit object-cover sm:object-top sm:h-[200px] md:h-[166px] "
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">
                  ajaykrishna2405@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
