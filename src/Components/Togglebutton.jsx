import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.4,
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const menuLinks = [
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolios" },
  { name: "Company", path: "/company" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const Togglebutton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button - Visible only on small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:block  px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        <CgMenuRightAlt />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-500/80 backdrop-blur-sm text-white"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Logo at top-left */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="absolute top-10 left-20"
            >
              <img
                src="/Images/logoWebczar-lightTM.png"
                alt="Logo"
                className="w-32 h-auto"
              />
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-14 text-4xl font-bold"
            >
              &times;
            </button>
<div className="space-y-4">
            {menuLinks.map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-semibold  my-2 hover:underline"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Togglebutton;
