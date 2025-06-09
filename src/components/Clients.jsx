import React from "react";
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png'
import logo from '../assets/logo.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';


const clientLogos = [
  logo1,logo2,logo,logo3,logo4,logo5
];

const Clients = () => {
  return (
    <section id="clients" className="bg-darkgreen text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-1">
          Clients <span className="text-lightgreen">We Keep</span>
        </h2>

        {/* Green underline */}
        <hr className="border-lightgreen  mb-10" />

        {/* Logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="h-20 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
