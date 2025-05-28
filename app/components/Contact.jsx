import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleParam = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const form = e.target;
    const formData = new FormData(form);
  
    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: formData,
      });
  
      if (res.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Error submitting form.");
      }
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div
      id="contact"
      className="w-full px-[-12%] py-10 scroll-mt-28 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none "
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with Me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-3  font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form
        action="https://getform.io/f/aqomnqga"
        method="POST"
        className="max-w-2xl mx-auto "
        // onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(50px,_1fr))] gap-6 mt-6 mb-4 ">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={query.name}
            onChange={handleParam}
            required
            className="flex-1 p-2 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={query.email}
            onChange={handleParam}
            required
            className="flex-1 p-2 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>
        <textarea
          rows={6}
          name="message"
          placeholder="Enter your message"
          value={query.message}
          onChange={handleParam}
          required
          className="w-full p-2 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-4 dark:bg-darkHover/30 dark:border-white/90"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex cursor-pointer items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit Now <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        {/* <button
          type="submit"
          disabled={isSubmitting}
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 mx-auto rounded-full cursor-pointer
    ${
      isSubmitting
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-black/80 hover:bg-black text-white"
    }`}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Submit Now
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </>
          )}
        </button> */}
      </form>
    </div>
  );
};

export default Contact;
