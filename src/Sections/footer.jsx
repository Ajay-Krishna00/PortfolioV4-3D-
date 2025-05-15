import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black-100 flex flex-col items-center justify-center pb-5">
      <p className="text-lg text-white-600 font-generalsans mt-4">
        © {currentYear} Ajay KrishnaD . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
