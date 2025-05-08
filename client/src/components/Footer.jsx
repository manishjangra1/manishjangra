import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-20 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-600 mb-4">
          © {new Date().getFullYear()} Manish. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 text-xl text-gray-700">
          <a
            href="https://github.com/manishjangra001"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
