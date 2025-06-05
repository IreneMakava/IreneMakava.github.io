import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="fixed top-5 mx-10 z-50 bg-gradient-to-r from-green-700/70 to-green-500/90 text-white px-6 py-4 flex flex-wrap justify-between items-center shadow-md rounded w-[95%]">
      
      {/* Logo section */}
      <div className="max-w-screen-xl px-4 py-3">
        <a href="#home">
          <img src="/logo1.png" alt="Logo" className="h-10 w-auto" />
        </a>
      </div>

      {/* Hamburger button (mobile) */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpenMenu(!openMenu)}
      >
        ☰
      </button>

      {/* Navigation links */}
      <ul className={`md:flex md:items-center md:gap-6 absolute md:static top-20 left-0 w-full md:w-auto bg-green-700 md:bg-transparent transition-all duration-300 ease-in-out ${openMenu ? 'block' : 'hidden'}`}>
        
        <li className="p-2 hover:text-green-400"><a href="#home">Home</a></li>

        <li className="group relative p-2 hover:hover:text-green-400">
          <span className="cursor-pointer">About</span>
          <ul className="absolute hidden group-hover:block shadow-lg mt-2 w-40 bg-white text-black z-10 rounded-md">
            <li className="px-4 py-2 hover:text-green-400"><a href="#about">About Us</a></li>
            <li className="px-4 py-2 hover:text-green-400"><a href="#mission">Our Mission</a></li>
            <li className="px-4 py-2 hover:text-green-400"><a href="#why-us">Why Us</a></li>
          </ul>
        </li>

        <li className="group relative p-2 hover:text-green-400">
          <span className="cursor-pointer">Services</span>
          <ul className="absolute hidden group-hover:block shadow-lg mt-2 w-56 bg-white text-black z-10 rounded-md">
            <li className="px-4 py-2 hover:text-green-400"><a href="#services">Our Services</a></li>
            <li className="px-4 py-2 hover:text-green-400"><a href="#printing">Printing & Branding</a></li>
            <li className="px-4 py-2 hover:text-green-400"><a href="#social-media">Social Media</a></li>
          </ul>
        </li>

        <li className="group relative p-2 hover:text-green-400">
          <span className="cursor-pointer">Projects</span>
          <ul className="absolute hidden group-hover:block shadow-lg mt-2 w-40 bg-white text-black z-10 rounded-md">
            <li className="px-4 py-2 hover:text-green-400"><a href="#projects">Projects</a></li>
            <li className="px-4 py-2 hover:text-green-400"><a href="#works">Works</a></li>
          </ul>
        </li>

        <li className="p-2 hover:text-green-400"><a href="#clients">Clients</a></li>
        <li className="p-2 hover:text-green-400"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
