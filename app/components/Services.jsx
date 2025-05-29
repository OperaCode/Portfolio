import { assets, serviceData } from "@/assets/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[-15%] py-12 scroll-mt-28"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg  font-Ovo"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I am a full stack developer from Nigeria, with 3+ years experiemce in
        multiple companies
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid gap-6 my-14 px-6 grid-cols-auto "
      >
        {serviceData.map((service, index) => (
          <motion.div
            whileHover={{scale:1.05}}
            key={service.title || index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:[box-shadow:4px_4px_0_#000] cursor-pointer hover:bg-purple-50 hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white "
          >
            <Image src={service.icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white">
              {service.description}
            </p>
            <a
              href={service.link}
              className="flex items-center gap-2 text-sm mt-5 text-gray-600 dark:text-white"
            >
              Readmore
              <ArrowRight size={22} />
              {/* <Image src={assets.right_arrow} alt='' className='w-4' /> */}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
