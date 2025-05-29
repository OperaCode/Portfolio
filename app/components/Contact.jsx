import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

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
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
      id="contact"
      className="w-full px-[-12%] py-10 scroll-mt-28 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none "
    >
      <motion.h4 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:0.3,duration:0.5 }}
      className="text-center mb-2 text-lg font-Ovo">Connect with Me</motion.h4>
      <motion.h2
       initial={{y:-20, opacity:0}}
       whileInView={{y:0,opacity:1}}
       transition={{delay:0.3,duration:0.5}}
      className="text-center text-5xl font-Ovo">Get in touch</motion.h2>
      <motion.p
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{delay:0.7, duration:0.5}}
       className="text-center max-w-2xl mx-auto mt-3  font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.9, duration:0.5}}
        action="https://getform.io/f/aqomnqga"
        method="POST"
        className="max-w-2xl mx-auto "
        // onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(50px,_1fr))] gap-6 mt-6 mb-4 ">
          <motion.input
          initial={{x:-50,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{delay:1.1, duration:0.6}}
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={query.name}
            onChange={handleParam}
            required
            className="flex-1 p-2 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
          <motion.input
          initial={{x:50,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{delay:1.1, duration:0.6}}
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={query.email}
            onChange={handleParam}
            required
            className="flex-1 p-2 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>
        <motion.textarea
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:1.3, duration:0.6}}
          rows={6}
          name="message"
          placeholder="Enter your message"
          value={query.message}
          onChange={handleParam}
          required
          className="w-full p-2 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-4 dark:bg-darkHover/30 dark:border-white/90"
        ></motion.textarea>

        <motion.button
        whileHover={{scale:1.05}}
        transition={{ duration:0.3}} 
          type="submit"
          className="py-3 px-8 w-max flex cursor-pointer items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit Now <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>
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
      </motion.form>
    </motion.div>
  );
};

export default Contact;
