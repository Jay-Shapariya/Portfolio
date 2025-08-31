import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "#home" },
    { id: 2, text: "About", link: "#about" },
    { id: 3, text: "Experience", link: "#experience" },
    { id: 4, text: "Projects", link: "#project" },
    { id: 5, text: "Contact", link: "#contact" },
  ];

  return (
    <motion.div
      id="navBar"
      className="bg-white flex justify-between items-center h-auto w-full mx-auto px-4 md:px-8 lg:px-20 lg:py-7 py-8 left-0 top-0 text-[1.5rem] md:text-[1.7rem] fixed shadow-md z-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.h1
        className="w-full text-2xl md:text-3xl font-bold text-[#2D2E32] px-4 md:px-10 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Jay Shapariya
      </motion.h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex list-none">
        {navItems.map((item, index) => (
          <motion.li
            key={item.id}
            className="p-4 hover:text-[#147EFB] rounded-xl cursor-pointer duration-300 text-[#2D2E32] font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={item.link}>{item.text}</a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <motion.div
        onClick={handleNav}
        className="block md:hidden cursor-pointer"
        aria-label="Toggle mobile menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {nav && (
          <motion.ul
            className="fixed top-0 left-0 w-full h-full bg-gray-50 border-r border-r-gray-900 ease-in-out duration-500 md:hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Mobile Logo */}
            <div className="w-[90%] font-bold flex justify-end pt-5">
              <motion.div
                onClick={handleNav}
                className="block md:hidden cursor-pointer"
                aria-label="Close mobile menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {nav && <AiOutlineClose size={30} />}
              </motion.div>
            </div>

            {/* Mobile Navigation Items */}
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                className="p-4 text-center mt-16 md:mt-20 font-semibold text-3xl md:text-4xl rounded-xl hover:text-[#147EFB] text-[#2D2E32] duration-300 cursor-pointer border-gray-600"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <a onClick={handleNav} href={item.link}>
                  {item.text}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
