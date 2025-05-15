import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_fckb15j",
        "template_1l0k45a",
        {
          from_name: form.name,
          to_name: "Ajay Krishna",
          from_email: form.email,
          to_email: "ajaykrishna2405@gmail.com",
          message: form.message,
        },
        "79LcqrC55wt9BY8Yw",
      );
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      setMessage("Your Message has been send!");
    } catch (error) {
      setLoading(false);
      console.log(error);
      setMessage("Something went Wrong!");
    }
  };
  return (
    <section className="sm:px-40 px-10 my-10" id="contact">
      {message && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50  "
          style={{ zIndex: 100 }}
        >
          <div className="bg-white p-5 rounded-lg ">
            <p className="text-center text-lg">{message}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded text-md w-full"
              onClick={() => setMessage("")}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* <img
          src="/assets/terminal.png"
          alt="terminal bg"
          className="absolute inset-0 min-h-screen"
        /> */}
        <div className="flex flex-col gap-5">
          <div className="contact-container border-black-300 border-2 rounded-lg p-10 bg-white-100">
            <h3 className="head-text font-generalsans mb-2">Let's Talk</h3>
            <p className="text-lg text-white-600 font-generalsans">
              Whether you're looking to build something from scratch, refine
              what you already have, or just chat about an exciting idea — I'm
              always open to new collaborations and challenges. Let's create
              something impactful together.
            </p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col space-y-7"
            >
              <label className="space-y-3">
                <span className="field-label font-generalsans">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="field-input"
                  required
                />
              </label>
              <label className="space-y-3">
                <span className="field-label font-generalsans">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="johndoe@gmail.com"
                  className="field-input"
                  required
                />
              </label>
              <label className="space-y-3">
                <span className="field-label font-generalsans">
                  Your Message
                </span>
                <textarea
                  name="message"
                  type="text"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi, I wanna give you a job..."
                  className="field-input"
                  required
                  rows={5}
                />
              </label>
              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow-up"
                  className="field-btn_arrow"
                />
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center  border-black-300 border-2 rounded-lg p-10 bg-white-100">
            <p className="font-generalsans sm:text-3xl text-xl font-semibold text-gray_gradient">
              Or Reach out to me on
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/Ajay-Krishna00"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/github.svg"
                  alt="LinkedIn"
                  className="w-8 h-8"
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
                  className="w-8 h-8 bg-white"
                />
              </a>
              <a
                href="https://www.instagram.com/ajay_k.d_?igsh=czY3NHVodWd4ZHEx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/instagram.svg"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
