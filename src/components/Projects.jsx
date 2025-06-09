import React from "react";
import Image from '../assets/1.jpg'
import Image1 from '../assets/2.jpg'
import Image2 from '../assets/3.jpg'
import Image3 from '../assets/4.jpg'

const clientLogos = [
  {
    img: Image ,
  },
  {
    img: Image1,
  },
  {
    img: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=800&q=60',
  },
  {
    img: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=60',
  },
  {
    img: Image2,
  },
  {
    img: Image3,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#081205] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Our <span className="text-green-400">Projects</span>
        </h2>

        {/* Grid with 3 images per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.img}
              alt={`Client logo ${index + 1}`}
              className="h-60 w-80 object-cover rounded-lg shadow-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
