import servicesImage from '../assets/ourServices.jpg';

export default function Services() {
  const services = [
    { icon: "bx-pencil", title: "Creative Service" },
    { icon: "bx-calendar", title: "Event Management" },
    { icon: "bx-printer", title: "Printing and Branding" },
    { icon: "bx-bullseye", title: "Digital Marketing" },
    { icon: "bx-ruler", title: "Concept Design" },
    { icon: "bx-target-lock", title: "Brand Activations" },
    { icon: "bx-bar-chart", title: "Marketing and PR" },
    { icon: "bx-smile", title: "Social Media Marketing" },
    { icon: "bx-briefcase", title: "Marketing Research" },
  ];

  return (
    <section id="services" className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-contain bg-center h-full "
        style={{
          backgroundImage: `url(${servicesImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Soft gradient overlay with skew */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 0, 65% 0, 55% 100%, 0% 100%)",
          background: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 h-full max-h-screen overflow-y-auto px-6 sm:px-12 pt-14 pb-10 flex flex-col justify-start items-start text-white">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10">
          Our <span className="text-lightgreen">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="bg-white text-lightgreen p-4 rounded-full shadow-lg text-xl">
                <i className={`bx ${service.icon}`}></i>
              </div>
              <span className="hover:text-lightgreen">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
