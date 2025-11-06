import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Fade, Zoom } from "react-awesome-reveal"; 

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  //  Portfolio items
  const projects = [
    {
      category: "Packaging",
      src:  "https://preview.colorlib.com/theme/orbit/images/work_1.jpg",
      title: "Packaging Design 1",
      
    },
    {
      category: "Packaging",
      src: "https://preview.colorlib.com/theme/orbit/images/work_5.jpg",
      title: "Packaging Design 2",
    },
    {
      category: "Mockup",
      src: "https://preview.colorlib.com/theme/orbit/images/work_2.jpg",
      title: "Mockup 1",
    },
    {
      category: "Mockup",
      src: "https://preview.colorlib.com/theme/orbit/images/work_6.jpg",
      title: "Mockup 2",
    },
    {
      category: "Typography",
      src: "https://preview.colorlib.com/theme/orbit/images/work_3.jpg",
      title: "Typography 1",
    },
    {
      category: "Typography",
      src: "https://preview.colorlib.com/theme/orbit/images/work_7.jpg",
      title: "Typography 2",
    },
    {
      category: "Photography",
      src: "https://preview.colorlib.com/theme/orbit/images/work_4.jpg",
      title: "Photography 1",
    },
    
  ];

  //  Filter by category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory).slice(0, 2);

  const categories = [
    "All",
    "Packaging",
    "Mockup",
    "Typography",
    "Photography",
  ];

  return (
    <div className="py-16 px-6 md:px-20 bg-white text-black">
      <Fade direction="down" duration={800} triggerOnce>
        <h1 className="text-4xl font-bold text-center my-8 pb-4 text-red-500 md:text-blue-500">
          My Portfolio
        </h1>
      </Fade>

      {/*  Category Links */}
      <Fade direction="up" duration={1000} triggerOnce>
        <ul className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium ">
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer hover:text-green-500 transition-colors duration-200 pb-4 ${
                activeCategory === category
                  ? "text-green-500 font-semibold"
                  : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </Fade>

      {/* Animated Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filteredProjects.map((project, index) => (
          <Zoom key={index} duration={800} triggerOnce>
            <div className="overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={project.src}
                alt={project.title}
                className="w-80 h-64 object-cover"
              />
              <p className="text-center mt-2 font-medium">{project.title}</p>
            </div>
          </Zoom>
        ))}
      </div>
      {/* <div className="absolute inset-0 bg-black/50 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center flex-col text-white text-center ">
      <h3 className="text-lg font-semibold">{project.title || project.title}</h3>
      <p className="text-sm">{project.title}</p>
      </div> */}

      {/*  Mobile toggle button */}
      <button
        onClick={toggleMenu}
        className="text-red-500 text-2xl md:hidden block mx-auto mt-10"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Portfolio;
