import React from "react";
import { motion } from "motion/react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-4 h-40 w-full object-cover"
      />
      <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
      <p className="text-gray-600 text-sm my-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-sm my-2">
        {project.techStack.map((t, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <a
          href={project.liveLink}
          target="_blank"
          className="text-blue-600 font-medium hover:underline hidden"
        >
          Live
        </a>
        <a
          href={project.github}
          target="_blank"
          className="text-gray-700 font-medium hover:underline"
        >
          Code
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
