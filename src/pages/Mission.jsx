import React from 'react';
import 'boxicons/css/boxicons.min.css';

export default function Mission() {
   
  return (
    <section id='mission' className="py-16 px-4 sm:px-6 bg-darkgreen text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap -mx-4 justify-center"> {/* Added justify-center */}
          
          {/* Vision */}
          <div 
            className="w-full md:w-1/2 lg:w-1/3 px-4 mt-4"
            data-aos="zoom-in" 
            data-aos-delay="200"
          >
            <div className="
              h-full p-6 bg-[#0d180a] rounded-lg shadow-md
              transition-all duration-300 ease-in-out
              text-center flex flex-col items-center
              hover:bg-[#12200e] hover:scale-[1.02] hover:shadow-lg
              cursor-pointer
            ">
              <div className="icon text-lightgreen text-4xl mb-4">
                <i className='bx bx-rocket'></i> {/* Fixed class attribute */}
              </div>
              <h2 className="font-bold mb-4">Our <span className='text-lightgreen'>Vision</span></h2>
              <p>
                To provide result-oriented Creative Services, Event Management, Printing and advertising campaigns that help our clients achieve their goal of increasing brand awareness, influencing sales, and fostering growth.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div 
            className="w-full md:w-1/2 lg:w-1/3 px-4 mt-4"
            data-aos="zoom-in" 
            data-aos-delay="200"
          >
            <div className="
              h-full p-6 bg-[#0d180a] rounded-lg shadow-md
              transition-all duration-300 ease-in-out
              text-center flex flex-col items-center
              hover:bg-[#12200e] hover:scale-[1.02] hover:shadow-lg
              cursor-pointer
            ">
              <div className="icon text-lightgreen text-4xl mb-4">
                <i className='bx bx-bolt-circle'></i> {/* Fixed class attribute */}
              </div>
              <h2 className="font-bold mb-4">Our <span className='text-lightgreen'>Mission</span></h2>
              <p>
                To provide innovative and effective integrated marketing and advertising solutions that help our clients grow their brands and realize their business goals.
              </p>
            </div>
          </div>

          {/* Values */}
          <div 
            className="w-full md:w-1/2 lg:w-1/3 px-4 mt-4"
            data-aos="zoom-in" 
            data-aos-delay="200"
          >
            <div className="
              h-full p-6 bg-[#0d180a] rounded-lg shadow-md
              transition-all duration-300 ease-in-out
              text-center flex flex-col items-center
              hover:bg-[#12200e] hover:scale-[1.02] hover:shadow-lg
              cursor-pointer
            ">
              <div className="icon text-lightgreen text-4xl mb-4">
                <i className='bx bx-medal'></i> {/* Changed to standard medal icon */}
              </div>
              <h2 className="font-bold mb-4">Our <span className='text-lightgreen'>Values</span></h2>
              <p>
                To deliver the highest quality of services and surpass client expectations. Our key values include: <br />
                Responsibility, Professionalism, Citizenship, Vigilance, Safety, We activate emotions, We are resourceful, 
                We create memorable content, and We reach every audience.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
  
