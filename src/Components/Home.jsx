import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaBars, FaTimes } from "react-icons/fa";
import backgroundImage from "../assets/hero-bg.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="relative h-screen w-full overflow-x-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
      <nav className="   fixed bg-black/40 backdrop-blur-md top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 py-5 z-2">
        {/* Logo */}
        <div className="text-white border border-white px-3 py-1 font-semibold text-xl">
          CodeD
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-4 lg:gap-8 text-white font-semibold">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Portfolio</li>
          <li className="hover:text-gray-300 cursor-pointer">Resume</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden z-40"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center text-white text-lg space-y-8 transition-transform duration-300 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {["Home", "About", "Services", "Resume", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer list-none hover:text-green-400"
              onClick={toggleMenu}
            >
              {item}
            </li>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-[90%] mx-auto">
        <Slide direction="down" duration={1000} delay={200}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight">
            I'm Oliver Deborah
          </h1>
        </Slide>
        <Slide direction="up" duration={1000}>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-6 text-white leading-snug">
            A Front-end Developer
          </h2>
        </Slide>
        <Fade>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-[90%] mx-auto leading-relaxed">
            A passionate front-end developer with experience in building
            responsive and user-friendly web applications using modern
            technologies like React, JavaScript, HTML, and CSS.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
