import Clumps from "../Components/Clumps";
import { techKnowledge } from "../constants";

const TechStack = () => {
  return (
    <section className="sm:px-20 px-5 my-20" id="tech">
      <h1 className="head-text">Tech Stack</h1>
      <div className="flex sm:flex-row flex-col w-full">
        <div className="flex flex-col justify-between w-full text-white sm:p-10 p-5">
          {techKnowledge.map((data, index) => (
            <div className="mb-4 " key={index}>
              <h2 className="text-xl font-semibold ">{data.category}</h2>
              <div className="flex flex-wrap gap-3 mt-2 ">
                {data.items.map((tech, id) => (
                  <div className="inline toolCard hover:bg-gray-100 hover:text-black hover:font-semibold transition-all" key={id}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="sm:min-h-[30vh] max-h-[60vh] sm:w-[70vw] w-full flex justify-center items-center">
          <Clumps />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
