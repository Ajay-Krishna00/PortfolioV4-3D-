import { clientReviews } from "../constants";

const Testimonial = () => {
  return (
    <section className="sm:px-10 px-5 py-5 ">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-neutral-300 font-generalsans">
          Testimonials
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 sm:px-10 px-0">
        {clientReviews.map(({ id, name, position, img, review }) => {
          return (
            <div
              key={id}
              className="bg-black-300 p-5 md:10 rounded-lg shadow-lg col-span-1 opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <p className="text-white mb-5 font-generalsans">{review}</p>
              <div className="flex">
                <img
                  src={img}
                  alt={name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-white font-generalsans font-semibold">
                    {name}
                  </h3>
                  <p className="text-neutral-400 font-generalsans">
                    {position}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
