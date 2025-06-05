import React from "react";
import workImage from '../assets/ourWorkProcess.jpg'

const Works = () => {
  const steps = [
    { step: "STEP 01", title: "Briefing" },
    { step: "STEP 02", title: "Research" }, 
    { step: "STEP 03", title: "Ideation" },
    { step: "STEP 04", title: "Strategy" },
    { step: "STEP 05", title: "Execution" },
    { step: "STEP 06", title: "Reporting" },
  ];

  return (
    <section id="works" className=" bg-cover bg-center py-10 px-2 sm:px-4 "
    style={{ backgroundImage: `url(${workImage})`,
    backgroundSize : 'cover',
    backgroundPosition: 'center center'
    }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl  mb-4 text-white">
            Our Work <span className="text-lightgreen">Process</span>
          </h2>
          <hr className="border-lightgreen w-full mb-6" />
          <p className="text-lg leading-relaxed text-gray-300">
            Begins at the initial step of the conceptualization phase, all the
            way through the final phase; evaluation. We undertake projects from
            both the Private Sector and the Government Sector, setting the
            highest possible standards at each level of our work process.
          </p>
        </div>

        {/* Right Section - Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center"
              style={{ marginLeft: `${index * 20}px` }} // stair-step indent
            >
              <div className="bg-darkgreen text-lightgreen font-bold text-sm py-2 px-4 rounded-l-full">
                {step.step}
              </div>
              <div className="bg-white text-black font-semibold py-2 px-6 rounded-r-full">
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
