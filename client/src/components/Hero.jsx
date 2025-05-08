import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col space-y-4 md:flex-row md:justify-evenly items-center bg-gradient-to-br from-blue-50 to-white px-6 pt-24"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transitions={{ duration: 0.6 }}
    >
      <div>
        <img
          src="../src/assets/image.jpg"
          alt="image"
          className="w-32 h-32 md:h-52 md:w-52 object-cover rounded-[100px] shadow-2xl drop-shadow-stone-800"
        />
      </div>
      <div>
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-gray-800 text-center"
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transitions={{ duration: -5 }}
        >
          Hi, I'm <span className="text-blue-600">Manish</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A passionate MERN Stack Developer crafting modern web applications
          with React, Node.js, and MongoDB.
        </motion.p>
        <motion.div
          className="mt-6 flex gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50 transition"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
