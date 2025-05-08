import React from "react";
import { motion } from "motion/react";
const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          I'm a MERN stack developer with a passion for building full-stack web
          applications. I enjoy solving real-world problems with clean, scalable
          code. Whether it's frontend interfaces or backend APIs, I love working
          across the full stack.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <div className="bg-blue-50 p-4 rounded-xl shadow w-60">
            <h3 className="text-xl font-semibold text-blue-600">Frontend</h3>
            <p className="mt-2 text-gray-700">
              React, Tailwind, HTML, CSS, JavaScript
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl shadow w-60">
            <h3 className="text-xl font-semibold text-green-600">Backend</h3>
            <p className="mt-2 text-gray-700">Node.js, Express.js, MongoDB</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl shadow w-60">
            <h3 className="text-xl font-semibold text-purple-600">Tools</h3>
            <p className="mt-2 text-gray-700">
              Git, GitHub, VS Code, Postman, Vercel
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
