import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHamburger, FaMoon, FaSun } from "react-icons/fa";
import { toggleMenu } from "../redux/toggleSlice";
import { motion, AnimatePresence } from "motion/react";
import { toggleTheme } from "../redux/themeSlice";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.toggle.isOpen);
  const { theme } = useSelector((state) => state.theme);
  const handleToggleButton = () => {
    dispatch(toggleMenu(isOpen));
  };
  return (
    <>
      <nav className="w-full px-6 py-4 fixed top-0 bg-white/30 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-gray-800">Manish</h1>
          </Link>
          <ul className={`hidden md:flex gap-6 text-gray-700 font-medium`}>
            <li>
              <a href="#home" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="ml-4 text-xl"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </ul>

          <div className="md:hidden">
            {isOpen ? (
              <p
                onClick={handleToggleButton}
                className="cursor-pointer font-extrabold text-xl"
              >
                ✕
              </p>
            ) : (
              <FaHamburger
                onClick={handleToggleButton}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </nav>
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-40 p-6 flex flex-col gap-6 md:hidden"
          >
            <a
              onClick={handleToggleButton}
              className="self-end text-xl cursor-pointer"
            >
              ✕
            </a>
            <a
              href="#home"
              onClick={handleToggleButton}
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={handleToggleButton}
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={handleToggleButton}
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={handleToggleButton}
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="ml-4 text-xl"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
