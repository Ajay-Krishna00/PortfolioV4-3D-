import React from "react";
import { useMediaQuery } from "react-responsive";

const SocialLinks = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      {!isMobile && (
        <div className="mb-9 p-5 ml-2 bg-white-90 left-0 bottom-4 fixed">
          <div className="flex flex-col  justify-center gap-7 cursor-disable">
            <a
              href="https://github.com/Ajay-Krishna00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/github1.png"
                alt="github"
                className="w-9 h-9 rounded-md bg-white hover:bg-violet-500 hover:rounded-lg hover:w-10 hover:h-10 animate-pulse hover:animate-none transition-all duration-300 object-contain p-0.5"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-krishna-d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/linkedin.png"
                alt="LinkedIn"
                className="w-9 h-9 rounded-md  bg-white hover:bg-violet-500 hover:rounded-lg hover:w-10 hover:h-10 hover:animate-none transition-all animate-pulse duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/ajay_k.d_?igsh=czY3NHVodWd4ZHEx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/instagram.png"
                alt="instagram"
                className="w-9 h-9 rounded-lg p-0.5 bg-white hover:bg-violet-500 hover:rounded-xl hover:w-10 hover:h-10 hover:animate-none animate-pulse transition-all duration-300"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialLinks;
