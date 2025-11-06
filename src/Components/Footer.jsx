import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16 px-8 py-12">
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {/* About */}
        <div className="">
          <h3 className="font-bold text-lg mb-3">About Orbit</h3>
          <p className="text-sm leading-relaxed">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <h4 className="font-bold mt-4 mb-2">Connect</h4>
          <div className="flex gap-3 text-gray-600">
            <FaInstagram className="hover:text-green-500 cursor-pointer" />
            <FaTwitter className="hover:text-green-500 cursor-pointer" />
            <FaFacebookF className="hover:text-green-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-green-500 cursor-pointer" />
            <FaPinterestP className="hover:text-green-500 cursor-pointer" />
            <FaDribbble className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold text-lg mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Design</li>
            <li>eCommerce</li>
            <li>WordPress</li>
            <li>Frontend</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>43 Raymouth Rd. Baltimoer, London 3910</li>
            <li>+1(123)-456-7890</li>
            <li>info@mydomain.com</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      <p className="text-center text-sm text-gray-500">
        Copyright ©2025 All rights reserved | This template is made with{" "}
        <span className="text-red-500">❤</span> by{" "}
        <span className="text-green-500">Colorlib</span>
      </p>
    </footer>
  );
};

export default Footer;
