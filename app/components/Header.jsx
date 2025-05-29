import { assets } from "@/assets/assets";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale:0 }}
        whileInView={{ scale:1 }}
        transition={{ duration:0.8, type: "spring" }}
        className="mt-8 "
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
        initial={{ y:-20, opacity:0 }}
        whileInView={{ y:0, opacity:1 }}
        transition={{ duration:0.6, delay:0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi ! I'm Raphael Faboyinde{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />{" "}
      </motion.h3>
      <motion.h1
        initial={{ y:-30, opacity:0 }}
        whileInView={{ y:0, opacity:1 }}
        transition={{ duration:0.8, delay:0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full Stack Web Developer
      </motion.h1>
      <motion.p
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:0.6, delay:0.7 }}
        className="max-w-2x1 mx-auto font-Ovo"
      >
        I build full stack web solutions designed to scale, from crafting sleek
        UI/UX to developing powerful APIs. With over 3 years of hands-on
        experience.
        <br />
        Based in Nigeria, building for users across the globe.{" "}
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y:30, opacity:0 }}
          whileInView={{ y:0, opacity:1 }}
          transition={{ duration:0.6, delay:1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact me <ArrowRight />{" "}
        </motion.a>
        <motion.a
          initial={{ y:30, opacity:0 }}
          whileInView={{ y:0, opacity:1 }}
          transition={{ duration:0.6, delay:1.2 }}
          href="/CV.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume <Download />{" "}
        </motion.a>
      </div>
    </div>
  );
  2;
};

export default Header;
