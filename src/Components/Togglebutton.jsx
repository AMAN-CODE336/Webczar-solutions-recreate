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
  {
    name: "Services",
    path: "/services",
    dropdown: true,
    subLinks: [
      {
        name: "Digital Marketing",
        path: "/services/digital-marketing",
        dropdown: false,
        subLinks: [
          { name: "Bulk SMS", path: "/services/digital-marketing/sms" },
          { name: "SMO", path: "/services/digital-marketing/smo" },
          { name: "Email Services", path: "/services/digital-marketing/email" },
        ],
      },
      {
        name: "Web Development",
        path: "/services/web-development",
        dropdown: false,
        subLinks: [
          { name: "E-commerce", path: "/services/web-development/ecommerce" },
          { name: "Portfolio", path: "/services/web-development/portfolio" },
        ],
      },
    ],
  },
  { name: "Portfolio", path: "/portfolios" },
  { name: "Company", path: "/company" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const NestedDropdown = ({ items, setIsOpen }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="absolute top-auto top-0 bg-white text-black py-2 px-4 rounded-lg shadow-lg space-y-2 z-50 min-w-[200px]">
      {items.map((item, index) => (
        <div
          key={item.name}
          className="relative group"
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <Link
            to={item.path}
            onClick={() => setIsOpen(false)}
            className="block px-2 py-1 hover:bg-blue-100 rounded"
          >
            {item.name}
          </Link>
          {item.dropdown && activeIndex === index && (
            <NestedDropdown items={item.subLinks} setIsOpen={setIsOpen} />
          )}
        </div>
      ))}
    </div>
  );
};

const Togglebutton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:block px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
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
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="absolute top-10 left-8 lg:top-10 lg:left-20"
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

            <div className="space-y-6 relative">
              {menuLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  className="text-center group relative"
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <Link
                    to={link.path}
                    onClick={() => !link.dropdown && setIsOpen(false)}
                    className="text-5xl font-semibold my-2 hover:underline"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && activeService === index && (
                    <NestedDropdown items={link.subLinks} setIsOpen={setIsOpen} />
                  )}
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
